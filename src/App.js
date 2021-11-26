/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './navigation/AppNavigator';
import 'react-native-gesture-handler'
import SplashScreen from 'react-native-lottie-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}

export default App;
