import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../../firebase';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';



const SignUp = ({ navigation}:any) => {
    const [name,setName]=useState<string>("");
    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

    let errorElement;
    if (error) {
        errorElement = <Text>
            <Text>Error: {error.message}</Text>
        </Text>
    }
    if (loading) {
        return <Text>Loading...</Text>;
    }
    const handleRegister = async (): Promise<void> => {

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }
    if(user){
        navigation.replace("login");
    }
    return (
        <View>
            <Text style={{textAlign:"center"}}>Please SignUp</Text>
            <TextInput
                style={{
                    height: 40,
                    margin:5,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                placeholder="Your Name!"
                value={name}
                onChangeText={(data) => setName(data)}
            />
            <TextInput
                style={{
                    height: 40,
                    margin:5,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                placeholder="Enter your email!"
                value={email}
                onChangeText={(data) => setEmail(data)}
            />
            <TextInput
                style={{
                    height: 40,
                    margin:5,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                secureTextEntry={true}
                placeholder="password"
                onChangeText={(data) => setPassword(data)}
            />
            <Button
                onPress={() => {
                    handleRegister()
                }}
                title={"SignUp"}
            />
            {errorElement}
            <Button

                onPress={() => {
                    navigation.replace("login");
                }}
                title="Login"
            />
        </View>
    )
}

export default SignUp