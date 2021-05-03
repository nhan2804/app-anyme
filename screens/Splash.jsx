import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Splash() {
  return (
    <View style={styles.viewStyles}>
      <Text style={styles.textStyles}>Yukino</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  textStyles: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
});
