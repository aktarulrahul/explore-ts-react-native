import { Pressable, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootState } from '../store';
import { toggleTheme, selectTheme } from '../store/themeSlice';

export default function TabTwoScreen() {
  const count = useSelector((state: RootState) => state.counter.value);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Text style={styles.title}>{count}</Text>
      <Text style={styles.title}>{theme}</Text>
      <Pressable
        onPress={() => {
          dispatch(toggleTheme('dark'));
        }}
      >
        <Text style={styles.title}>InCrement</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          dispatch(toggleTheme('blue'));
        }}
      >
        <Text style={styles.title}>decrement</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
