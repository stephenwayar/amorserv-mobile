import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { UserContext } from '../contexts/UserContext';

const DashboardLayout = ({ children }) => {
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser('')

    setTimeout(() => {
      navigation.navigate('login');
    }, 500)
  }

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <View style={styles.topNav}>
          <Text style={styles.logo}>Amorserv</Text>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logoutButton}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        {children}
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('home');
          }}
          style={styles.navButton}
        >
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('resources');
          }}
          style={styles.navButton}
        >
          <Text>Resources</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('about');
          }}
          style={styles.navButton}
        >
          <Text>About</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('profile');
          }}
          style={styles.navButton}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Center vertically
    height: 70,
    paddingHorizontal: 20,
    backgroundColor: '#093BEF',
  },
  logo: {
    fontWeight: "bold",
    color: 'white',
    fontSize: 20
  },
  logoutButton: {
    fontWeight: "bold",
    color: 'white',
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNav: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  navButton: {
    padding: 10,
    color: '#212121'
  },
  navText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white'
  },
});

export default DashboardLayout;