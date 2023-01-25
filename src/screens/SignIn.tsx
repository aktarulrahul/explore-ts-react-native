import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Auth = getAuth();

const SignIn = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handlePress = () => {
    signInWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => console.log(userCredential))
      .catch((error) => console.log(error.message));
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require('../../assets/empty-state.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>Never forget your notes</Text>
      <View style={styles.inputContainer}>
        <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
        <Input
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View
        style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
      >
        <Button
          title="Sign In"
          onPress={handlePress}
          customStyles={{ alignSelf: 'center', marginBottom: 60 }}
        />
        <Pressable
          onPress={() => {
            navigation.navigate('sign-up');
          }}
        >
          <Text style={{ textAlign: 'center' }}>
            Don't have an account?
            <Text style={{ color: 'green', fontWeight: 'bold', marginLeft: 4 }}>
              {' '}
              Sign Up
            </Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 253,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
  },
  inputContainer: {
    marginHorizontal: 16,
    marginTop: 16,
  },
});
