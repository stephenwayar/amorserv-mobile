import React, { useState } from "react"
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import {
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native'
import { register } from "../../../services/auth"

export default function Signup() {
  const navigation = useNavigation()
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const handleSignup = async () => {
    setFullNameError('');
    setEmailError('');
    setPasswordError('');

    let isValid = true;
    if (!fullName.trim()) {
      setFullNameError('Please enter your full name');
      isValid = false;
    }
    if (!email.trim()) {
      setEmailError('Please enter your email');
      isValid = false;
    }
    if (!password.trim()) {
      setPasswordError('Please enter your password');
      isValid = false;
    }

    if (isValid) {
      setIsLoading(true);
      try {
        await register({ fullName, email, password });
        setIsLoading(false);
        setFullName('')
        setEmail('')
        setPassword('')
        setTimeout(() => {
          navigation.navigate('login')
        }, 1000)
      } catch (error) {
        setIsLoading(false);
        if (error.response && error.response.data && error.response.data.message) {
          setEmailError(error.response.data.message);
        } else {
          setEmailError('An error occurred. Please try again later.');
        }
      }
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.mainContainer}>
        <Text style={styles.textLogo}>
          Amorserv
        </Text>

        <Text style={styles.textLogin}>
          Create an Account
        </Text>

        <View style={styles.container}>
          <TextInput
            style={[styles.usernameInput, styles.shadowProp]}
            placeholder={'Enter your full name'}
            placeholderTextColor={"grey"}
            value={fullName}
            onChangeText={setFullName}
          />
          <Text style={styles.errorText}>{fullNameError}</Text>
        </View>

        <View style={styles.container}>
          <TextInput
            style={[styles.usernameInput, styles.shadowProp]}
            placeholder={'Enter your email'}
            placeholderTextColor={"grey"}
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.errorText}>{emailError}</Text>
        </View>

        <View style={styles.container}>
          <TextInput
            style={[styles.usernameInput, styles.shadowProp]}
            placeholder={'Enter your password'}
            placeholderTextColor={"grey"}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.errorText}>{passwordError}</Text>
        </View>

        <View style={styles.fullWidth}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSignup}
          >
            <Text style={styles.signupText}>
              {isLoading ? 'Loading...' : 'Signup'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.haveAccountText}>
          <Text>Already have an account?</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('login');
            }}
            style={styles.signupContainer}
          >
            <Text style={styles.color}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}