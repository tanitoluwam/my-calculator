import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function Input({ input, setInput }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        value={input}
        onChangeText={setInput}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#F2F2F4",
  },

  inputText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#9E9E9F",
    paddingTop: 70,
    paddingRight: 35,
  },
});
