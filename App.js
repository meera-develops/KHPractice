import { StatusBar } from 'expo-status-bar';
import '@/global.css';
import { GluestackUIProvider } from "/components/ui/gluestack-ui-provider/index.tsx";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <GluestackUIProvider mode="light"><View style={styles.container}>
        <Text>This is our project for KnightHacks</Text>
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
