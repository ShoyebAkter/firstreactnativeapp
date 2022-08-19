import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { FC } from 'react'
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button, Text, View } from 'react-native'
import { auth } from '../../firebase'
import GetData from '../GetData/GetData'
import Login from '../Login/Login'

const Home: FC = () => {
  return (
    <View>
      <GetData />
    </View>
  )
}
export default Home