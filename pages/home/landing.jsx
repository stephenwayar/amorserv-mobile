import React, { useEffect } from 'react'
import styles from './styles'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Landing() {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('login')
    }, 3000)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Amorserv Mobile App</Text>
    </View>
  )
}