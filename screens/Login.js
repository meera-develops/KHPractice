import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import heroScreenImg from '../assets/echo-img/home-screen.jpg';
import spotify from '../assets/echo-img/spotify-logo.png';

const LoginScreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <ImageBackground
          source={heroScreenImg}
          style={styles.heroImg}>

          <View style={styles.header}>
            <Text style={styles.heroIext}>ECHO</Text>
          </View>

          <Image
            source={spotify}
            style={styles.logo}>
            </Image>

          <View style={styles.inputs}>
            <View style={styles.inputContainer}>
              <Text style={styles.subtitle}>Log in with your Spotify Account and <Text style={styles.echo}>ECHO</Text> will authenticate</Text>
              <Text style={styles.text}>Username</Text>
              <TextInput style={styles.input} placeholder="Enter Username" />
            </View>

            {/* make this text blue
            change submit button
            confirm mobile looks good 
            add box -- finish page, start on navbar component and then home screen possibly  */}

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
        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroImg: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
    },
  heroIext: {
    top: 40,
    letterSpacing: 22,
    color: 'white',
    fontSize: 65,
    fontWeight: 'bold',
    marginHorizontal: 25,
    textAlign: 'center'
  },
  header: {
    marginBottom: 40,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    padding: 20
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  echo: {
    letterSpacing: 10,
    fontSize: 30,
    color: 'white',
  },
  logo: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  inputs: {
    marginTop: 20,
    color: 'blue'
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 5,
  },
  forgotPassword: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 15,
    marginHorizontal: 25,
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
    marginHorizontal: 25
  },
  submit: {
    color: 'white',
    fontSize: 18,
  },
});

export default LoginScreen;