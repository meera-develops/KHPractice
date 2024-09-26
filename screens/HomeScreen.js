import * as React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import heroScreenImg from '../assets/echo-img/home-screen.jpg';
import turntable from '../assets/echo-img/turntable-light.png';


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

            <Text style={styles.header}>Find your <Text style={styles.subtitle}>Echo</Text></Text>

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
      top: 0,
      padding: 20,
      color: '#C8ACD6',
      fontSize: 80,
      lineHeight: 84,
      textAlign: 'center',
      alignSelf: 'center',
      letterSpacing: '15',
    },
    turntableImg: {
      width: 200,
      height: 200,
      position: 'absolute',
      alignSelf: 'center',
      top: 100,
      padding: 20
    },
    header: {
      position: 'absolute',
      top: 250,
      padding: 20,
      color: '#fff',
      alignSelf: 'center',
    },
    subtitle:{
      color: '#fff',
      alignSelf: 'center',
      fontSize: 40,

    },
    buttonContainer: {
      top: 140,
      backgroundColor: 'white',
      borderColor: '#c8acd6',
      padding: 15,
      marginHorizontal: 20,
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