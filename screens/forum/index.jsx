import { Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListPosts from "./ListPost";
import ViewPost from "./ViewPost";
import NewPost from "./NewPost";
function Forum() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ animationEnabled: false, headerShown: false }}
    >
      <Stack.Screen
        name="ListPost"
        component={ListPosts}
        options={{ title: "Trang chủ" }}
      />
      <Stack.Screen
        name="ViewPost"
        component={ViewPost}
        options={{ title: "Xem chi tiết" }}
      />
      <Stack.Screen
        name="NewPost"
        component={NewPost}
        options={{ title: "Tạo câu hỏi ngu ngốc" }}
      />
    </Stack.Navigator>
  );
}

Forum.propTypes = {};

export default Forum;
