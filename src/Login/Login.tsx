import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { FC, useState } from 'react'
import { app, auth } from '../../firebase';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Social from './Social';

const Login: FC = ({ navigation }: any) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [signInWithGoogle, Guser, Gloading] = useSignInWithGoogle(auth)
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // console.log(navigation.getState);

    const handleLogin = async (): Promise<void> => {
        // console.log(email, password)
        await signInWithEmailAndPassword(email, password)
    }
    if (user || Guser) {
        navigation.replace('home')
    }

    if (loading || Gloading) {
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
                    borderWidth: 2,
                    borderRadius:5
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
                    borderWidth: 2,
                    borderRadius:5
                }}
                secureTextEntry={true}
                placeholder="password"
                value={password}
                onChangeText={(data) => setPassword(data)}
            />
            <View style={styles.button}>
                    <Button
                        title="Login"
                        onPress={() => { handleLogin() }}
                    />
                </View>
                {error &&
                    <Text>
                        <Text style={styles.red}>Error: {error?.message}</Text>
                    </Text>}
                <View style={styles.button}>
                    <Button
                        onPress={() => navigation.replace("signup")}
                        title="SignUp"
                    />
                </View>
                <Social/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    },
    button: {
        height: 40,
        width: 200,
        marginLeft: 100,
        backgroundColor: "#7fff00",
        borderRadius: 5,
        justifyContent: "center",
        marginBottom: 5
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