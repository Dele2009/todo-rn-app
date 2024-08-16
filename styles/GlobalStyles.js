import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
  buttomSolid: {
    buttonInnerContainer: {
      backgroundColor: "#22acf1",
      borderRadius: 28,
      paddingVertical: 17,
      paddingHorizontal: 16,
      elevation: 2,
    },
    buttonText: {
      color: "white",
      textAlign: "center",
      fontWeight: "700",
      fontSize: 14,
    },
    pressed: {
      opacity: 0.75,
    },
  },
  buttomOutline: {
    buttonInnerContainer: {
      backgroundColor: "transparent",
      borderRadius: 28,
      borderWidth: 1.2,
      borderStyle: "solid",
      borderColor: "gray",
      paddingVertical: 17,
      paddingHorizontal: 16,
      // elevation: 2,
    },
    buttonText: {
      color: "gray",
      textAlign: "center",
      fontWeight: "700",
      fontSize: 14,
    },
    pressed: {
      opacity: 0.75,
    },
  },
});
