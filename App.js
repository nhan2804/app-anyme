import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet } from "react-native";
import TabNav from "./Tab";
import Login from "./screens/login/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import useCheckLogin from "./common/hooks/useCheckLogin";
import api from "./api";
import config from "./api/config";
import Splash from "./screens/Splash";
import Video from "./screens/course/Video";

const queryClient = new QueryClient();
export default function App() {
  const [auth, setauth] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("auth");
      if (value !== null) {
        setauth(true);
      } else {
        console.log("k co auth");
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    api
      .get(config.api + "signin")
      .then((res) => {
        console.log("suceess");
        getData();
        setisLoading(false);
      })
      .catch((e) => {
        console.log("no");
        AsyncStorage.removeItem("auth");
        setauth(false);
        setisLoading(false);
      });
  }, []);

  if (isLoading) return <Splash />;

  return (
    <QueryClientProvider client={queryClient}>
      {!auth && <Login setauth={setauth}></Login>}
      {/* <Video></Video> */}
      {auth && (
        <NavigationContainer>
          <TabNav></TabNav>
        </NavigationContainer>
      )}
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
