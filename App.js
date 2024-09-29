import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import '@/global.css';
import { GluestackUIProvider } from "/components/ui/gluestack-ui-provider/index.tsx";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen  from './screens/HomeScreen';
import currentlyPlaying from './screens/currentlyPlaying';
import LoginScreen from './screens/Login';
import ForgotPW from './screens/ForgotPw';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* <StatusBar style="light" backgroundColor='transparent' translucent={true} /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="currentlyPlaying" component={currentlyPlaying} options = {{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPW" component={ForgotPW} options ={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );

}

