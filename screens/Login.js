import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import styles from './LoginSignup.css'

//change divs to text elements to fix code

const LoginScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <div className='container'>
          <div className='header'>
            <div className='text'> Log In </div>
            <div className='underline'></div>
          </div>
          <div className='inputs'>
            <div className='input'>
            <div className='text'> Username </div>
              <input type='username'></input>
              <div className='input'>
              <div className='text'> Password </div>
                <input className='password'></input>
              </div>
            </div>
            <div className='forgot-password'> Forgot Password? <span> Click here! </span></div>
            <div className='submit-container'>
              <div className='submit'> Sign Up</div>
            </div>
          </div>
        </div>
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