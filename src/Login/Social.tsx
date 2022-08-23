import { View, Text, StyleSheet, Button } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';
import { IUserType } from '../../types/datatypes';

WebBrowser.maybeCompleteAuthSession();
type Nav = {
    replace: (value: string) => void;
  }


const Social: FC = () => {
    const [accessToken,setAccessToken]=useState<string | undefined>('');
    const [userInfo,setUserInfo]=useState<IUserType>();
    
    const navigation = useNavigation<Nav>();
    
    const [request,response,promptAsync]=Google.useAuthRequest({
        iosClientId: "962289027598-2tmcskr14d0ooqqs975phao7tsd0fg70.apps.googleusercontent.com",
        expoClientId:"962289027598-2tmcskr14d0ooqqs975phao7tsd0fg70.apps.googleusercontent.com"
    })

    useEffect(()=>{
        if(response?.type==='success'){
            setAccessToken(response.authentication?.accessToken)
            getUserData()
        }
        
    },[response])

    const getUserData=async():Promise<void>=>{
        let userInfoResponse=await fetch('https://www.googleapis.com/userinfo/v2/me',{
            headers: { Authorization: `Bearer ${accessToken}`}
        })
        userInfoResponse.json().then(data=>{setUserInfo(data)
            navigation.replace('home')
        })
    }
    // if(userInfo){
        
    //     // console.log(userInfo)
    // }
    return (
        <View>
            <View style={styles.button}>
                <Button
                    // onPress={()=>navigation.navigate('home') }
                    onPress={ () => {promptAsync({showInRecents:true})
                
                }}
                    title="Google Sign In"
                />
            </View>
            {/* {error &&
                <Text>Error: {error.message}</Text>} */}
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
export default Social
