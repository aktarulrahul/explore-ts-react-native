import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { signOut } from 'firebase/auth';
import { auth } from '../../App';
import { AntDesign } from '@expo/vector-icons';

interface IPros {
  user: any;
  navigation: any;
}

const Home: React.FC<IPros> = ({ user, navigation }) => {
  console.log('user--->', user);
  const handleSignOut = () => {
    signOut(auth);
  };
  const onPressCreate = () => {
    navigation.navigate('Create');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>My Notes</Text>
        <Pressable onPress={onPressCreate}>
          <AntDesign name="pluscircle" size={24} color="black" />
        </Pressable>
      </View>
      <Button title="SignOut" onPress={handleSignOut} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
