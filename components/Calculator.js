import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Input from "./Input";
import Result from "./Result";
import Buttons from "./Buttons";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const onButtonPress = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult("error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Input input={input} setInput={setInput} />
      <Result result={result} />
      <Buttons onButtonPress={onButtonPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F4",
  },
});
