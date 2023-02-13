import { Pressable, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootState } from '../store';
import { decrement, increment } from '../store/counterSlice';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <Pressable
        onPress={() => {
          dispatch(increment());
        }}
      >
        <Text style={styles.title}>InCrement</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          dispatch(decrement());
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
