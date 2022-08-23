import { Button, StyleSheet, Text, View } from 'react-native';
import Home from './src/Home/Home';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/Login/SignUp';
import Login from './src/Login/Login';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
// import AsyncStorage from './node_modules/@react-native-community/async-storage'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen
         name="signup"
         options={{
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
         }}
         component={SignUp} />
        <Stack.Screen name="home" component={Home}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerRight: () => (
              <Button
              // disabled={!user}
                onPress={() => {
                  
                  signOut(auth)
                  navigation.replace("login")
                  // console.log(navigation)
                }}
                title="Logout"
                color="#00cc00"
              />
            )
          })} />
        <Stack.Screen
         name="login"
         options={{
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
         }}
         component={Login} />
        
        
      </Stack.Navigator>
      {/* {
          userInfo ? <Home/> : <Social userInfo={userInfo} setUserInfo={setUserInfo}/>
        } */}
    </NavigationContainer>
  );
}

