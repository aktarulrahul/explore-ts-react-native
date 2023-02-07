import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { database } from '../../App';
import { showMessage } from 'react-native-flash-message';

const noteColorOptions = [
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
  { label: 'Red', value: 'red' },
];

interface IPros {
  user: any;
  navigation: any;
  route: any;
  item: any;
}

const Update: React.FC<IPros> = ({ navigation, route, user, item }) => {
  const { note } = route.params;
  const [isLoading, setIsLoading] = React.useState(false);
  const [title, setTitle] = React.useState(note.title);
  const [description, setDescription] = React.useState(note.description);
  const [noteColor, setNoteColor] = React.useState(note.color);

  const handleNoteUpdate = async () => {
    setIsLoading(true);
    try {
      // await addDoc(collection(database, 'notes'), {
      //   title,
      //   description,
      //   color: noteColor,
      //   uid: user.uid,
      // });
      const docRef = await doc(database, 'notes', note.id);
      const result = await updateDoc(docRef, {
        title,
        description,
        color: noteColor,
        uid: user.uid,
      });
      console.log(result);
      setIsLoading(false);
      showMessage({
        message: 'Note Updated',
        type: 'success',
      });
      navigation.goBack();
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Update Note</Text>
      <Input
        placeholder="title"
        onChangeText={(text) => setTitle(text)}
        autoCapitalize="none"
        value={title}
      />
      <Input
        secureTextEntry
        placeholder="Description"
        onChangeText={(text) => setDescription(text)}
        autoCapitalize="none"
        multiline={true}
        value={description}
      />
      <Text style={styles.radioLabel}>Select Your Note Color</Text>
      {noteColorOptions.map((option, index) => {
        const selected = noteColor === option.value;
        return (
          <Pressable
            key={`sign-up-gender-option-${index}-${option}`}
            style={styles.radioContainer}
            onPress={() => setNoteColor(option.value)}
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
            <Text style={styles.radioText}>{option.label}</Text>
          </Pressable>
        );
      })}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Button
          title="Update"
          onPress={handleNoteUpdate}
          customStyles={{
            alignSelf: 'center',
            marginVertical: 60,
            width: '100%',
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Update;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
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
  radioLabel: {
    marginTop: 25,
    marginBottom: 10,
  },
});
