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
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseInitialize, { db } from '../firebase/initialize.firebase';
import {
  addDoc,
  collection,
  getDocs,
  doc,
  onSnapshot,
  query,
  where,
  getFirestore,
} from 'firebase/firestore';
import { database } from '../../App';
import { showMessage } from 'react-native-flash-message';
firebaseInitialize();

const Auth = getAuth();

const genderOptions = ['Male', 'Female'];

const SignUp = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [age, setAge] = React.useState('');

  // const selected = true;
  const handleSignUp = async () => {
    try {
      // 1. Create a user in Firebase Auth
      const result = await createUserWithEmailAndPassword(
        Auth,
        email,
        password
      );
      console.log(result);
      showMessage({
        message: 'User Created',
        description: 'User Created in Firebase Auth',
        type: 'success',
        onPress: () => {
          /* THIS FUNC/CB WILL BE CALLED AFTER MESSAGE PRESS */
        },
      });
      // 2. Create a user in Firestore
      await addDoc(collection(database, 'users'), {
        name: fullName,
        email: email,
        age: age,
        gender: selectedGender,
        uid: result.user.uid,
      });
      showMessage({
        message: 'User DB Updated',
        description: 'User Created in Firestore',
        type: 'success',
        onPress: () => {
          /* THIS FUNC/CB WILL BE CALLED AFTER MESSAGE PRESS */
        },
      });
    } catch (error) {
      console.log(error);
    }

    // 3. Navigate to the Home screen
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.text}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
        <Input
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Full Name"
          onChangeText={(text) => setFullName(text)}
        />
        <Input placeholder="Age" onChangeText={(text) => setAge(text)} />
        <Text style={{ marginVertical: 16 }}>Select Gender</Text>
        {genderOptions.map((option, index) => {
          const selected = selectedGender === option;
          return (
            <Pressable
              key={`sign-up-gender-option-${index}-${option}`}
              style={styles.radioContainer}
              onPress={() => setSelectedGender(option)}
            >
              <View
                style={[
                  styles.outerCircle,
                  !!selected && styles.selectedOuterCircle,
                ]}
              >
                <View
                  style={[
                    styles.innerCircle,
                    !!selected && styles.selectedInnerCircle,
                  ]}
                />
              </View>
              <Text style={styles.radioText}>{option}</Text>
            </Pressable>
          );
        })}
      </View>
      <View
        style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
      >
        <Button
          title="Sign Up"
          onPress={handleSignUp}
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
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioText: {},
  outerCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#cfcfcf',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedOuterCircle: {
    borderColor: 'orange',
  },
  innerCircle: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cfcfcf',
  },
  selectedInnerCircle: {
    backgroundColor: 'orange',
    borderColor: 'orange',
  },
});
