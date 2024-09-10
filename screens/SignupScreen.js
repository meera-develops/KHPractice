import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const SignupScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>Intro signup Screen</Text>
        <Text>Demo Text</Text>
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default SignupScreen;