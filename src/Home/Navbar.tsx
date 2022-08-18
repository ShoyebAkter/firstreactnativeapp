import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Login from '../Login/Login';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <View>
      <Tab.Navigator>
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="login" component={Login} />
      </Tab.Navigator>
    </View>
  )
}

export default Navbar