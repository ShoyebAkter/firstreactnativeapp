import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../../firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ILoginType } from '../../types/datatypes';

const Login = ({navigation}:any) => {
    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      let errorText;
      // console.log(user);
      if (error) {
        errorText = <div>
          <p className='text-danger'>Error: {error?.message}</p>
        </div>
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      const handleLogin = async (): Promise<void> => {
        await signInWithEmailAndPassword(email, password);
        navigation.navigate("Home")
        // 
      }
  return (
    <View>
      <Text>Login</Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="Enter your email!"
                value={email}
                onChangeText={(data)=>setEmail(data)}
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="password"
                value={password}
                onChangeText={(data)=>setPassword(data)}
            />
            <Button
            onPress={handleLogin}
                title={"Login"}
            />
            <Text>Don't have an account?
            <Button
                onPress={() => {
                    navigation.navigate("signup");
                }}
                title={"Create an account"}
            />
                 </Text>
    </View>
  )
}

export default Login