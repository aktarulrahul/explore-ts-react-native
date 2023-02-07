import { useFonts } from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
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
import { getFirestore } from 'firebase/firestore';
import FlashMessage from 'react-native-flash-message';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Update from './src/screens/Update';

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
export const database = getFirestore(app);
export const auth = getAuth();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authSubscriber = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (loading) {
        setLoading(false);
      }
    });
    return authSubscriber;
  }, []);

  if (loading) {
    return;
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <ActivityIndicator color="blue" size="large" />
    </SafeAreaView>;
  }
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Home" options={{ headerShown: false }}>
              {(props) => <Home {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen name="Create" options={{ headerShown: false }}>
              {(props) => <Create {...props} user={user} />}
            </Stack.Screen>
            {/* <Stack.Screen name="Update" options={{ headerShown: false }}>
              {(props) => <Update {...props} user={user} />}
            </Stack.Screen> */}
            <Stack.Screen name="Update" component={Update} />
          </>
        ) : (
          <>
            <Stack.Screen name="sign-in" component={SignIn} />
            <Stack.Screen name="sign-up" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
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
