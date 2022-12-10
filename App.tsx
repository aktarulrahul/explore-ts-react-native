import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { CustomButton } from './components/Button';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{ padding: 10, backgroundColor: '#25DF', height: 100 }}>
        <Text style={{ color: '#fff' }}>Checking</Text>
      </View>
      <Image
        source={require('./assets/icon.png')}
        resizeMode="contain"
        style={{ height: 100, width: 100, marginTop: 10 }}
      />
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        resizeMode="contain"
        style={{ height: 200, width: 100, marginTop: 10 }}
      />
      <Button
        // style={styles.button}
        title="Learn More"
        // color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Pressable onPress={() => alert('Pressed!')}>
        <Text style={styles.button}>Pressable</Text>
      </Pressable>
      <CustomButton
        title="Custom 1"
        style={{ margin: 10, textAlgin: 'center' }}
        textStyle={{ color: '#23dfec', fontSize: 20, fontWeight: 'bold' }}
      />
      <CustomButton
        title="Custom 2"
        style={{ margin: 10, textAlgin: 'center' }}
        textStyle={{ color: '#23dfec', fontSize: 20, fontWeight: 'bold' }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    textAlign: 'center',
  },
});
