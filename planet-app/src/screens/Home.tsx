import { View, StyleSheet, FlatList, Pressable, TextInput } from 'react-native';
import React from 'react';
import { Text } from '../components/text/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/PlanetHeader';
import colors from '../theme/colors';
import PLANET_LIST from '../data/PlanetList';
import spacing from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const [planetList, setPlanetList] = React.useState(PLANET_LIST);
  const handleSearchFilter = (text) => {
    const filteredList = PLANET_LIST.filter((item) => {
      const itemName = item.name.toLowerCase();
      const textData = text.toLowerCase();
      return itemName.indexOf(textData) > -1;
    });
    setPlanetList(filteredList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={false} title="THE PLANETS" />
      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.white}
        autoCorrect={false}
        style={styles.search}
        onChangeText={(text) => {
          handleSearchFilter(text);
        }}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={planetList}
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
  search: {
    padding: spacing[4],
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 0.5,
    margin: spacing[4],
  },
});
