import React from "react"
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import {
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native'

export default function Signup() {
  const navigation = useNavigation()

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
          />
        </View>

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
            <Text style={styles.signupText}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.haveAccountText}>
          <Text>Already have an account?</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('login')
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