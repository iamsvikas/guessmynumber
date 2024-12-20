import React from "react";
import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    padding: 12,
    borderColor: "white",
    maxWidth: "80%",
    width: 300,
  },
});

export default Title;
