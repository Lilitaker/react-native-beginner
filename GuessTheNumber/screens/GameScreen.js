import { View, Text, Stylesheet } from 'react-native';

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min) + min);
};

const GameScreen = (props) => {
  return <View>Hello</View>;
};

const styles = Stylesheet.create({});

export default GameScreen;
