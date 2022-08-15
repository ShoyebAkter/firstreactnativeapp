import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'
import { auth } from '../../firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ILoginType } from '../../types/datatypes';

const Login = ({navigation}:any) => {
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
    //   const handleLogin = async (event: React.SyntheticEvent): Promise<void> => {

    //     event.preventDefault();
    //     const target = event.target as typeof event.target & ILoginType;
    //     const email: string = target.email.value;
    //     const password: string = target.password.value;
    
    //     await signInWithEmailAndPassword(email, password);
    //     console.log(user);
    //     // 
    //   }
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