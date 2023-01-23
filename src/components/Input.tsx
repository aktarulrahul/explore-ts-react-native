import { StyleSheet, TextInput } from 'react-native';
import React from 'react';

interface InputProps {
  placeholder: string;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry || false}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});
