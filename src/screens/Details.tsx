import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from '../components/text/Text';
import PlanetHeader from '../components/PlanetHeader';
import colors from '../theme/colors';

export default function Details(navigate) {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} title={navigate.route.params.planetName} />
      <Text>Details</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
