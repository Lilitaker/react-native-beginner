import { View, StyleSheet } from 'react-native';

/* Others */
import Colors from '../constants/colors';

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: Colors.black_000,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8, //Android only
    backgroundColor: Colors.white_fff,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
