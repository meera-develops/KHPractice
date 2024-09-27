import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const SignupScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>See you favorite hits here</Text>
        <Text style={styles.text}>Listen to what your friends are listening to</Text>
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a6c5d6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'green'
    }
  });

  export default SignupScreen;