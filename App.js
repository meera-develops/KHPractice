import { StatusBar } from 'expo-status-bar';
import '@/global.css';
import { GluestackUIProvider } from "/components/ui/gluestack-ui-provider/index.tsx";
import { StyleSheet, Text, View } from 'react-native';
//import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Platform } from 'react-native';



export default function App() {
  return (

      <GluestackUIProvider mode="light"><View style={styles.container}>
          <Text>This is our project for KnightHacks</Text>
          <Text>Welcome back!</Text>
          <Text>I am now using GlueStack for the UI</Text>
          <Text>Hello World</Text>
          <Text>this is a default navigation page</Text>
          <StatusBar style="auto" />
        </View></GluestackUIProvider>

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
