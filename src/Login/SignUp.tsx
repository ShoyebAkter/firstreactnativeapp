import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../../firebase';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

const SignUp = ({ navigation }: any) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

    if (loading) {
        return <Text>Loading...</Text>;
    }
    const handleRegister = (): void => {
        createUserWithEmailAndPassword(email, password);
        updateProfile({ displayName: name });
    }
    if (user) {
        navigation.replace("login");
    }
    return (
        <View>
            <Text style={{ textAlign: "center" }}>Please SignUp</Text>
            <TextInput
                style={{
                    height: 40,
                    margin: 5,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 5
                }}
                placeholder="Your Name!"
                onChangeText={(data) => setName(data)}
            />
            <TextInput
                style={{
                    height: 40,
                    margin: 5,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 5
                }}
                placeholder="Enter your email!"
                onChangeText={(data) => setEmail(data)}
            />
            <TextInput
                style={{
                    height: 40,
                    margin: 5,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 5
                }}
                secureTextEntry={true}
                placeholder="password"
                onChangeText={(data) => setPassword(data)}
            />
            <View style={styles.button}>
                <Button
                    onPress={() => {
                        handleRegister()
                    }}
                    title={"SignUp"}
                />
            </View>
            {error &&
                <Text>
                    <Text style={{ color: "red" }}>Error: {error.message}</Text>
                </Text>}
            <View style={styles.button}>
                <Button

                    onPress={() => {
                        navigation.replace("login");
                    }}
                    title="Login"
                />
            </View>
        </View>
    )
}

export default SignUp

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