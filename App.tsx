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

export default function App() {
  const Stack = createNativeStackNavigator();
  const [user, loading, error] = useAuthState(auth)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='signup'>
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="home" component={Home}/>
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
