import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const noteColorOptions = [
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
  { label: 'Red', value: 'red' },
];

const Create = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [noteColor, setNoteColor] = React.useState('blue');

  const handleNoteCreate = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <Text>Create</Text>
      <Input
        placeholder="title"
        onChangeText={(text) => setTitle(text)}
        autoCapitalize="none"
      />
      <Input
        secureTextEntry
        placeholder="Description"
        onChangeText={(text) => setDescription(text)}
        autoCapitalize="none"
        multiline={true}
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
      <Button
        title="Create"
        onPress={handleNoteCreate}
        customStyles={{ alignSelf: 'center', marginBottom: 60 }}
      />
    </SafeAreaView>
  );
};

export default Create;

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
