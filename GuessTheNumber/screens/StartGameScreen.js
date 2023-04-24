import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

/* Components */
import Card from '../components/Card';
import Input from '../components/Input';

/* Others */
import Colors from '../constants/colors';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState();

  const numberInputHandler = (inputText) => {
    // Replace any non-numeric character with an empty string
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='number-pad'
          maxLength={2}
          onChangeText={numberInputHandler}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title='Reset' onPress={() => {}} color={Colors.secondary} />
          </View>
          <View style={styles.btn}>
            <Button title='Confirm' onPress={() => {}} color={Colors.primary} />
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
  input: {
    width: 50,
    textAlign: 'center',
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
