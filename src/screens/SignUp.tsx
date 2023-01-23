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

const SignUp = ({ navigation }) => {
  const handlePress = () => {};
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.text}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <Input placeholder="Email" />
        <Input secureTextEntry placeholder="Password" />
        <Input placeholder="Full Name" />
        <Input placeholder="Age" />
        <Pressable>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}></View>
          </View>
        </Pressable>
      </View>
      <View
        style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
      >
        <Button
          title="Sign Up"
          onPress={handlePress}
          customStyles={{ alignSelf: 'center', marginBottom: 60 }}
        />
        <Pressable
          onPress={() => {
            navigation.navigate('sign-in');
          }}
        >
          <Text style={{ textAlign: 'center' }}>
            Already have an account?
            <Text style={{ color: 'green', fontWeight: 'bold', marginLeft: 4 }}>
              {' '}
              Sign In
            </Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

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
  outerCircle: {},
  innerCircle: {},
});
