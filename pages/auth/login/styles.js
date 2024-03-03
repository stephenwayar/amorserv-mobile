import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  color: {
    color: '#051285'
  },

  signupContainer: {
    marginLeft: 5,
    color: '#051285'
  },

  noAccountText: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50
  },

  body: {
    height: "100%",
    backgroundColor: 'white'
  },

  signinText: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 13,
    fontSize: 18
  },

  mainContainer: {
    backgroundColor: 'white',
  },

  textLogo: {
    textAlign: 'center',
    marginTop: 90,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#051285'
  },

  textLogin: {
    textAlign: 'center',
    color: '#514C4C',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 45
  },

  usernameInput: {
    height: '100%',
    paddingLeft: 15,
    backgroundColor: 'white',
  },

  container: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    height: 55,
    borderRadius: 5,
  },

  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  button: {
    height: 50,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 5,
    backgroundColor: '#051285',
  }
})