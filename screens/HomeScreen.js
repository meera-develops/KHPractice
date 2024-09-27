import * as React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import heroScreenImg from '../assets/echo-img/home-screen.jpg';
import turntable from '../assets/echo-img/music_note.png';


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <ImageBackground
            source={heroScreenImg}
            style={styles.heroImg}>
            <Text style={styles.heroText}>ECHO</Text>

            <Image
              source={turntable}
              style={styles.turntableImg}
            ></Image>

            <Text style={styles.header}>Find your <Text style={styles.subtitle}> E c h o</Text></Text>

            <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.buttonContainer}>
              <Text style={styles.buttons}>
                Sign up
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttonContainer}>
              <Text style={styles.buttons}>
                Log in
              </Text>
            </TouchableOpacity>

          </ImageBackground>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative'
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
      top: 140,
      zIndex: 1,
      //padding: 20
    },
    header: {
      position: 'absolute',
      top: 290,
      padding: 20,
      color: '#fff',
      fontSize: 28,
      alignSelf: 'center',
    },
    subtitle:{
      color: '#978D9C',
      alignSelf: 'center',
      fontSize: 30,
      letterSpacing: 2
    },
    buttonContainer: {
      top: 160,
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
      color: 'black',
      fontSize: 18,
    }
  });

  export default HomeScreen;