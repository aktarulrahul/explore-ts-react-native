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

const SignUp = ({ navigation }) => {
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
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password"
        />
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

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});
