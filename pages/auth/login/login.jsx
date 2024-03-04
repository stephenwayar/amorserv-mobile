import React, { useContext, useState } from "react"
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import {
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native'
import { login } from "../../../services/auth"
import { UserContext } from "../../../contexts/UserContext"

export default function Login() {
  const { setUser } = useContext(UserContext)
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setEmailError('');
    setPasswordError('');

    let isValid = true;
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
        const res = await login({ email, password });

        setUser(res)

        setIsLoading(false);
        setEmail('')
        setPassword('')

        setTimeout(() => {
          navigation.navigate('home')
        }, 1000)
      } catch (error) {
        console.log(error)
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
          Login to your Account
        </Text>

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
            onPress={handleLogin}
          >
            <Text style={styles.signinText}>
              {isLoading ? 'Logging in...' : 'Login'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noAccountText}>
          <Text>Don't have an account?</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('signup')
            }}
            style={styles.signupContainer}
          >
            <Text style={styles.color}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}