import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ForgotPWScreen = ({ navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Hi, this page works!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF0000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ForgotPWScreen;