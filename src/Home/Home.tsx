import React, { FC } from 'react'
import { Text, View } from 'react-native'
import GetData from '../GetData/GetData'
import Navbar from './Navbar'

const Home:FC=()=> {
  return (
    <View>
        <Text>Home</Text>
        <GetData/>
    </View>
  )
}
export default Home