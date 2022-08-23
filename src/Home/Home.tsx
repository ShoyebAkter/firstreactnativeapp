import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { FC } from 'react'
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button, StyleSheet, Text, View } from 'react-native'
import { auth } from '../../firebase'
import GetData from '../GetData/GetData'
import Login from '../Login/Login'

const Home: FC = ({ navigation }: any) => {
  const [user, loading, error] = useAuthState(auth);
  // console.log(navigation.getParams('userInfo'))
  if(loading){
    return <Text>Loading...</Text>
  }
  return (
    <View >
    <GetData />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 200,
    marginLeft: 100,
    backgroundColor: "#7fff00",
    borderRadius: 5,
    justifyContent: "center",
    marginBottom: 5
  }
})
export default Home