import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, AboutScreen, GeoLocation,ImagePicker } from './src/screens'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
       
          <>
          
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="GeoLocation" component={GeoLocation} />
            <Stack.Screen name="ImagePicker" component={ImagePicker} />
          
          
          </>

      </Stack.Navigator>
    </NavigationContainer>
  );
}