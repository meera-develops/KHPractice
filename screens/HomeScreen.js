import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>Welcome to our app</Text>
        <Text>We are practicing React Native</Text>
        <Text>And using Gluestack UI for this</Text>
        <Button
          title="Go to Signup Screen"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default HomeScreen;