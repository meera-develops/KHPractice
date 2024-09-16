import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Log In</Text>
        <View style={styles.underline}></View>
      </View>

      <View style={styles.inputs}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Username</Text>
          <TextInput style={styles.input} placeholder="Enter Username" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPW')}>
          <Text style={styles.forgotPassword}>
            Forgot Password? <Text style={styles.clickable}>Click here!</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitContainer}>
          <Text style={styles.submit}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 40,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  underline: {
    height: 2,
    backgroundColor: 'black',
    marginTop: 5,
  },
  inputs: {
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  forgotPassword: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 15,
  },
  clickable: {
    fontWeight: 'bold',
  },
  submitContainer: {
    marginTop: 30,
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  submit: {
    color: 'white',
    fontSize: 18,
  },
});

export default LoginScreen;