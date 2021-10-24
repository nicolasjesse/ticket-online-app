import React from 'react';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator
    screenOptions={{ headerShown: false }}
  >
    <AuthStack.Screen name="Login" component={Login} options={{
      headerShown: false,
    }} />
    <AuthStack.Screen name="Register" component={Register} options={{
      headerShown: false,
    }} />
  </AuthStack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthNavigator} options={{
        headerShown: false,
      }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;