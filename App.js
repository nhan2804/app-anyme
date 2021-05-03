import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet } from "react-native";
import TabNav from "./Tab";
import Splash from "./screens/Splash";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();
export default function App() {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 200);
  }, []);
  if (isLoading) return <Splash />;
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <TabNav></TabNav>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
const styles = StyleSheet.create({
  box: {},
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
