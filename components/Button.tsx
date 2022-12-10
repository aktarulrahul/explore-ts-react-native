import { Pressable, Text, StyleSheet } from 'react-native';
interface CustomButtonProps {
  style?: any;
  textStyle?: any;
  title: string;
}
export const CustomButton: React.FC<CustomButtonProps> = ({
  style,
  textStyle,
  title,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#DDDDDD' : '#EEEEEE',
          ...styles.button,
        },
        style,
      ]}
      onPress={() => alert(`Pressed! ${title}`)}
    >
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
});
