import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from './text/Text';
import spacing from '../theme/spacing';
import colors from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PlanetHeader({ title, backBtn }) {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.container}>
      <Text preset="h2">{title}</Text>
      {backBtn && <AntDesign name="caretleft" size={24} color="white" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomWidth: 0.2,
    borderBottomColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
