import { View, StyleSheet, FlatList, Pressable } from 'react-native';
import React from 'react';
import { Text } from '../components/text/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/PlanetHeader';
import colors from '../theme/colors';
import PLANET_LIST from '../data/PlanetList';
import spacing from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={false} title="THE PLANETS" />
      <FlatList
        contentContainerStyle={styles.list}
        data={PLANET_LIST}
        keyExtractor={(item, index) => `index-${index}-id-${item.id}`}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => navigation.navigate('Details', { planet: item })}
              style={styles.item}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={[styles.circle, { backgroundColor: item.color }]}
                />
                <Text preset="h3" style={styles.itemName}>
                  {item.name}
                </Text>
              </View>
              <AntDesign name="right" size={18} color="white" />
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  list: {
    padding: spacing[5],
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    justifyContent: 'space-between',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  itemName: {
    textTransform: 'uppercase',
    marginLeft: spacing[4],
  },
  separator: {
    // height: 0.5,
    // backgroundColor: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 0.5,
  },
});
