import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from './text/Text';
import spacing from '../theme/spacing';
import colors from '../theme/colors';

export default function PlanetHeader({ title }) {
  return (
    <View style={styles.container}>
      <Text preset="h2">{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomWidth: 0.2,
    borderBottomColor: colors.white,
  },
});
