import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Create from './src/screens/Create';
import Edit from './src/screens/Edit';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDBuAqeFZbodh55Ys8Av_RlXLUALmms5KE',
  authDomain: 'rn-note-app-44157.firebaseapp.com',
  projectId: 'rn-note-app-44157',
  storageBucket: 'rn-note-app-44157.appspot.com',
  messagingSenderId: '96964369321',
  appId: '1:96964369321:web:a82439192f2bae2363c2b8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  const user = false;
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Create" component={Create} />
            <Stack.Screen name="Edit" component={Edit} />
          </>
        ) : (
          <>
            <Stack.Screen name="sign-in" component={SignIn} />
            <Stack.Screen name="sign-up" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
