import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { app, auth } from '../../firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ILoginType } from '../../types/datatypes';

const Login = ({ navigation }: any) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorText;
    // console.log(user);
    if (error) {
        errorText = <Text>
            <Text>Error: {error?.message}</Text>
        </Text>
    }
    if (loading) {
        return <Text>Loading...</Text>;
    }

    const handleLogin = async (): Promise<void> => {
        console.log(email, password)
        await signInWithEmailAndPassword(email, password);
    }
    if(user){
        navigation.navigate('home')
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
                onChangeText={(data) => setEmail(data)}
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="password"
                value={password}
                onChangeText={(data) => setPassword(data)}
            />
            <Button
                color="#3740FE"
                title="Signin"
                onPress={() => handleLogin()}
            />
            {errorText}
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});
export default Login