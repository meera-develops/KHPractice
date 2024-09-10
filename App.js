import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import '@/global.css';
import { GluestackUIProvider } from "/components/ui/gluestack-ui-provider/index.tsx";
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignupScreen } from './screens/signup'
import { Platform } from 'react-native';

function HomeScreen() {
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
