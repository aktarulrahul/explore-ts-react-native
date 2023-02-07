import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import Button from '../components/Button';
import { signOut } from 'firebase/auth';
import { auth, database } from '../../App';
import { AntDesign } from '@expo/vector-icons';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

interface IPros {
  user: any;
  navigation: any;
}

const Home: React.FC<IPros> = ({ user, navigation }) => {
  const [notes, setNotes] = React.useState([]);
  useEffect(() => {
    const notesQuery = query(
      collection(database, 'notes'),
      where('uid', '==', user.uid)
    );
    const notesListenerSubscription = onSnapshot(notesQuery, (snapshot) => {
      const notes = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setNotes(notes);
    });
  }, []);
  const noteFlatListRenderItem = ({ item }) => {
    return (
      <Pressable
        style={{ ...styles.itemContainer, backgroundColor: item.color }}
        onPress={() => {
          navigation.navigate('Update', { note: item });
        }}
      >
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </Pressable>
    );
  };
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
      <FlatList
        data={notes}
        renderItem={noteFlatListRenderItem}
        keyExtractor={(item) => `${item.uid}-${item.id}`}
        contentContainerStyle={{ padding: 10 }}
      />
      <Button
        title="SignOut"
        onPress={handleSignOut}
        customStyles={{ width: '90%', marginHorizontal: '5%' }}
      />
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
  itemContainer: {
    marginBottom: 10,
    border: '1px solid black',
    // borderRadius: 20,
    padding: 10,
  },
  itemText: {
    // textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
  itemDescription: {
    // textAlign: 'center',
    fontSize: 12,
    color: 'white',
    marginTop: 10,
  },
});
