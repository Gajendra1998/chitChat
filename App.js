import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home';
import Profile from './screen/Profile';
import Chat from './screen/Chat';
import Login from './screen/Login';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home"screenOptions={{headerShown: false }}>
      <Stack.Screen name="Home" component={Home} options={{ title: 'My Home' }}/>
      <Stack.Screen name="Profile" component={Profile}  options={{ title: 'My profile' }}/>
      <Stack.Screen name="Chat" component={Chat} options={{  title: 'Chat'}}/>
      <Stack.Screen name="Login" component={Login} options={{  title: 'Login'}}/>
    </Stack.Navigator>
  );
}

export default App

const styles = StyleSheet.create({})