import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import BiometricScreen from './screens/BiometricScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerShown:false}}
      initialRouteName='Signup'>
        <Stack.Screen
        name='Signup'
        component={SignupScreen}
        />
        <Stack.Screen
        name='Home'
        component={HomeScreen}
        />
         <Stack.Screen
        name='Biometric'
        component={BiometricScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App