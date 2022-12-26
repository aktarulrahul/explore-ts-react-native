import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { Text } from '../components/text/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/PlanetHeader';
import colors from '../theme/colors';
import PLANET_LIST from '../data/PlanetList';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader title="THE PLANETS" />
      <FlatList
        data={PLANET_LIST}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
