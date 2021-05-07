import { Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListPosts from "./ListPost";
import ViewPost from "./ViewPost";
function Forum() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListPost" component={ListPosts} />
      <Stack.Screen name="ViewPost" component={ViewPost} />
    </Stack.Navigator>
  );
}

Forum.propTypes = {};

export default Forum;
