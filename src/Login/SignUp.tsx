import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../../firebase';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { ISignUpType } from '../../types/datatypes';


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
        navigation.navigate("login");
    }
    return (
        <View>
            <Text>SignUp</Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="Your Name!"
                value={name}
                onChangeText={(data) => setName(data)}
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="Enter your email!"
                value={email}
                onChangeText={(data) => setEmail(data)}
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="password"
                onChangeText={(data) => setPassword(data)}
            />
            <Button
                onPress={() => {
                    handleRegister()
                }}
                title={"SignUp"}
            />
            <Text>Already have an account?
            <Button
                onPress={() => {
                    navigation.navigate("login");
                }}
                title={"Login"}
            />
                 </Text>
        </View>
    )
}

export default SignUp