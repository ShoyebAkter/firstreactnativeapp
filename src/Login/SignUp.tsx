import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { auth } from '../../firebase';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { ISignUpType } from '../../types/datatypes';


const SignUp = ({ navigation}:any) => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

    let errorElement;
    if (error) {
        errorElement = <div>
            <p>Error: {error.message}</p>
        </div>
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    // const handleRegister = async (event: React.SyntheticEvent): Promise<void> => {

    //     event.preventDefault();

    //     const target = event.target as typeof event.target & ISignUpType;
    //     const name: string = target.name.value;
    //     const email: string = target.email.value;
    //     const password: string = target.password.value;
    //     console.log(user);
    //     // await sendEmailVerification();
    //     //       alert('Sent email');

    //     await createUserWithEmailAndPassword(email, password);
    //     await updateProfile({ displayName: name });
    // }
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
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="Enter your email!"
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="password"
            />
            <Button
                onPress={() => {
                    navigation.navigate("Home");
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