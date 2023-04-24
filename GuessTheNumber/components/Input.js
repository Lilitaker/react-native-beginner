import { TextInput, StyleSheet } from 'react-native';

/* Others */
import Colors from '../constants/colors';

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: Colors.gray_808080,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
