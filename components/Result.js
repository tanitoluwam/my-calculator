import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Result({ result }) {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#F2F2F4",
  },
  resultText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#404040",
    paddingBottom: 30,
    paddingRight: 35,
  },
});
