import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Buttons({ onButtonPress }) {
  const buttons = [
    "C",
    "()",
    "%",
    "/",
    "1",
    "2",
    "3",
    "*",
    "4",
    "5",
    "6",
    "+",
    "7",
    "8",
    "9",
    "-",
    ".",
    "0",
    "000",
    "=",
  ];

  return (
    <View style={styles.buttonContainer}>
      {buttons.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => onButtonPress(item)}
        >
          <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#FEFEFE",
  },
  button: {
    fontSize: 24,
    width: "25%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
    borderColor: "none",
  },
  buttonText: {
    fontSize: 28,
  },
});
