import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet } from "react-native";
import TabNav from "./Tab";
export default function App() {
  return (
    <NavigationContainer>
      <TabNav></TabNav>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
    color: "red",
    marginTop: 30,
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  items: {
    backgroundColor: "pink",
    padding: 40,
    marginBottom: 10,
    fontSize: 50,
    borderRadius: 6,
  },
});
