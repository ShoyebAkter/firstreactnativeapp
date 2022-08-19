import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { app, auth } from '../../firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';



const Login = ({ navigation }: any) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = async(): Promise<void> => {
        // console.log(email, password)
        await signInWithEmailAndPassword(email, password).then(()=>{
            if(user){
                navigation.replace('home')
            }
        })
    }
    
    if (loading) {
        return <Text>Loading...</Text>
        
    }

    return (
        <View>
            <Text style={{ textAlign: "center", fontSize: 20 }}>Please Login</Text>
            <TextInput
                style={{
                    height: 40,
                    margin: 10,
                    borderColor: 'gray',
                    borderWidth: 2
                }}
                placeholder="Enter your email!"
                value={email}
                onChangeText={(data) => setEmail(data)}
            />
            <TextInput
                style={{
                    height: 40,
                    margin: 10,
                    borderColor: 'gray',
                    borderWidth: 2
                }}
                secureTextEntry={true}
                placeholder="password"
                value={password}
                onChangeText={(data) => setPassword(data)}
            />

            <Button
                title="Login"
                onPress={() => {handleLogin()}}
            />
            {error &&
                <Text>
                    <Text style={styles.red}>Error: {error?.message}</Text>
                </Text>}
            <Button
                onPress={() => navigation.replace("signup")}
                title="SignUp"
            />
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    red: {
        color: "red"
    }
});
export default Login