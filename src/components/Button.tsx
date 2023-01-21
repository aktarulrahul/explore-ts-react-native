import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

interface ButtonProps {
  title: string;
  onPress: () => void;
  customStyles?: object;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, customStyles }) => {
  return (
    <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    width: 165,
    height: 45,
    backgroundColor: '#FFE600',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
});
