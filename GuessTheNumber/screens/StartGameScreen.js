import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

/* Components */
import Card from '../components/Card';

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput style={styles.input} />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title='Reset' onPress={() => {}} color='#c717fc' />
          </View>
          <View style={styles.btn}>
            <Button title='Confirm' onPress={() => {}} color='#f7287b' />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  btn: {
    width: '45%',
  },
});

export default StartGameScreen;
