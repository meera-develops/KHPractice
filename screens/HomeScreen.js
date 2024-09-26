import * as React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';


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

            <Button size="lg" variant="solid" action="negative">
              <ButtonText>Sign up</ButtonText>
            </Button>

            {/* convert to TouchableOpacity */}
            {/* <Button
              style={styles.buttons}
              title="Go to Signup Screen"
              onPress={() => navigation.navigate('Signup')}
            />
            <Text style={styles.bodyText}>Click here to log in</Text>
            <Button
              style={styles.buttons}
              title="LOGIN"
              onPress={() => navigation.navigate('Login')}
            /> */}
            {/* convert to TouchableOpacity */}

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
      marginBottom: 100, //looks weird on desktop
      alignSelf: 'center',
    },
    bodyText: {
      color: 'white',
      textAlign: 'center'
    },
    buttons: {
      marginTop: 30,
      backgroundColor: '#FFF',
      padding: 10,
      alignItems: 'center',
      borderRadius: 5,
      color: 'black'
    }
  });

  export default HomeScreen;