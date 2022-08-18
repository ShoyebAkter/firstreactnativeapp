import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import GetData from './src/GetData/GetData';
import Home from './src/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/Login/SignUp';
import Login from './src/Login/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Logout from './src/Login/Logout';
import { signOut } from 'firebase/auth';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [user, loading, error] = useAuthState(auth)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="home" component={Home} options={{
          headerRight:()=>(
            <Button
            onPress={()=>signOut(auth)}
            title="Logout"
            color="#00cc00"
            />
          )
        }}/>
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
