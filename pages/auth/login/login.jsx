import React from "react"
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import {
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native'

export default function Login() {
  const navigation = useNavigation()

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
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={[styles.usernameInput, styles.shadowProp]}
            placeholder={'Enter your password'}
            placeholderTextColor={"grey"}
            secureTextEntry={true}
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.signinText}>
              Login
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