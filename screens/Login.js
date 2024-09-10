import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const LoginScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>You can log in here!</Text>
        <Text></Text>
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

  export default LoginScreen;