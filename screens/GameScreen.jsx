import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const GameScreen = () => {
  const [pickedNumber, setPickedNumber] = useState();

  onPickedNumberHandler = (picked) => {
    setPickedNumber(picked);
  };
  return (
    <View style={styles.container}>
      <Text>Hello, My World! Parthi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameScreen;
