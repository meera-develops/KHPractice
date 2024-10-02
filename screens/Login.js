import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import heroScreenImg from '../assets/echo-img/home-screen.jpg';
import spotify from '../assets/echo-img/spotify-logo.png';
import { Button } from '@/components/ui/button';
import { userLogin } from '../spotify/auth/auth.js';


const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={heroScreenImg}
        style={styles.heroImg}
      >
        <View style={styles.header}>
          <Text style={styles.heroText}>ECHO</Text>
        </View>

        <Image source={spotify} style={styles.logo} />

        <View style={styles.inputs}>
          <Text style={styles.subtitle}>
            Log in with your Spotify Account and <Text style={styles.echo}>ECHO</Text> will authenticate
          </Text>

          <TouchableOpacity onPress={() => userLogin()} style={styles.submitContainer}>
            <Text style={styles.submit}>Log in with Spotify</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -30
  },
  heroImg: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
    },
  heroIext: {
    top: 10,
    letterSpacing: 22,
    color: 'white',
    fontSize: 65,
    fontWeight: 'bold',
    marginHorizontal: 25,
    textAlign: 'center'
  },
  header: {
    marginBottom: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    padding: 15
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  echo: {
    letterSpacing: 10,
    fontSize: 28,
    color: '#433d8b',
    fontStyle: 'italic'
  },
  logo: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
    alignSelf: 'center'
  },
  inputs: {
    marginTop: 10,
    color: 'blue'
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    //marginTop: 5,
  },
  forgotPassword: {
    color: 'white',
    textDecorationLine: 'underline',
    marginHorizontal: 25,
  },
  clickable: {
    fontWeight: 'bold',
  },
  submitContainer: {
    marginTop: 30,
    backgroundColor:'#C8ACD6',
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 3,
    marginHorizontal: 25
  },
  submit: {
    color: 'white',
    fontSize: 18,
  },
});

export default LoginScreen;