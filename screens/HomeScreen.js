import * as React from 'react';
import { ImageBackground, Image, Button, StyleSheet, Text, View } from 'react-native';

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
          </ImageBackground>
        </View>


      //create login and signup button
      
      // <View style={styles.container}>
      //   <Text>Welcome to our app</Text>
      //   <Text>We are practicing React Native</Text>
      //   <Text>And using Gluestack UI for this</Text>
      //   <Button
      //     title="Go to Signup Screen"
      //     onPress={() => navigation.navigate('Signup')}
      //   />
      //   <Text>Click below to login</Text>
      //   <Button
      //     title="LOGIN"
      //     onPress={() => navigation.navigate('Login')}
      //   />
      // </View>
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
      color: '#C8ACD6',
      fontSize: 80,
      lineHeight: 84,
      textAlign: 'center',
      letterSpacing: '15',
      bottom: 160,
    },
    turntableImg: {
      width: 200,
      height: 200,
      position: 'absolute',
      bottom: 170,
      marginBottom: 100,//looks weird on desktop
      alignSelf: 'center',
    }
  });

  export default HomeScreen;