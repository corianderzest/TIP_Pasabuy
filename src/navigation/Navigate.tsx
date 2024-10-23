import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import WelcomePage from '../screens/WelcomePage'
import LoginPage from '../screens/LoginPage'
import RegisterPage from '../screens/RegisterPage'
import { RootStackParamList } from './NavigationTypes';

const Stack = createStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage} 
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RegisterPage"
          component={RegisterPage}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
  )
}

export default Navigator