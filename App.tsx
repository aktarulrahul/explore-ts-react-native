import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import spacing from './src/theme/spacing';
import { Text } from './src/components/text/Text';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.container}>
      <View>
        <Text preset="h1">Hi</Text>
      </View>
    </SafeAreaView>
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
