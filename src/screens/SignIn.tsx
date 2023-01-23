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

const SignIn = ({ navigation }) => {
  const handlePress = () => {};
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require('../../assets/empty-state.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>Never forget your notes</Text>
      <View style={styles.inputContainer}>
        <Input placeholder="Email" />
        <Input secureTextEntry placeholder="Password" />
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
