import * as React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'; // Added Linking

import heroScreenImg from '../assets/echo-img/home-screen.jpg';
import turntable from '../assets/echo-img/music_note.png';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

          
          <ImageBackground
            source={heroScreenImg}
            style={styles.heroImg}>
            <Text style={styles.heroText}>ECHO</Text>
  //const CLIENT_ID = "";
//   const REDIRECT_URI = "http://localhost:8081/";
//   const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
//   const RESPONSE_TYPE = "token";

//   const handleSpotifyLogin = () => {
//     const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
//     Linking.openURL(authUrl); // Open the Spotify login page
//   };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={heroScreenImg}
        style={styles.heroImg}
      >
        <Text style={styles.heroText}>ECHO</Text>

        <Image
          source={turntable}
          style={styles.turntableImg}
        />

        <Text style={styles.header}>
          Find your <Text style={styles.subtitle}> E c h o</Text>
        </Text>

        <TouchableOpacity onPress={handleSpotifyLogin} style={styles.buttonContainer}>
          <Text style={styles.buttons}>
            Log into Spotify
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  heroImg: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  heroText: {
    position: 'absolute',
    marginTop: 140,
    top: 5,
    padding: 20,
    color: '#C8ACD6',
    fontSize: 80,
    lineHeight: 84,
    textAlign: 'center',
    alignSelf: 'center',
    letterSpacing: 20,
  },
  turntableImg: {
    width: 100,
    height: 135,
    position: 'absolute',
    alignSelf: 'center',
    top: 270,
    zIndex: 1,
  },
  header: {
    position: 'absolute',
    top: 420,
    padding: 20,
    color: '#fff',
    fontSize: 28,
    alignSelf: 'center',
  },
  subtitle: {
    color: '#978D9C',
    alignSelf: 'center',
    fontSize: 30,
    letterSpacing: 2,
  },
  buttonContainer: {
    top: 140,
    backgroundColor: 'white',
    borderColor: '#c8acd6',
    padding: 15,
    marginHorizontal: 25,
    marginVertical: 20,
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 10,
  },
  buttons: {
    color: '#433D8B',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
