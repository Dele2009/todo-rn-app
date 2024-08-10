import { View, Text, Pressable, StyleSheet } from "react-native";
// import { theme } from '../utils/theme';

const PrimaryButton = ({ children, onPress, propStyles })=> {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [propStyles.buttonInnerContainer, propStyles.pressed]
            : propStyles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: 'lightblue' }}
      >
        <Text style={propStyles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    marginVertical: 9,
    overflow: "hidden",
  },
 
});
