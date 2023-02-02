import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { signOut } from 'firebase/auth';
import { auth } from '../../App';

interface IPros {
  user: any;
}

const Home: React.FC<IPros> = ({ user }) => {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Button title="SignOut" onPress={handleSignOut} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
