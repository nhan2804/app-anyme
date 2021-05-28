import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Blog from ".";
import DetailBlog from "./DetailBlog";
function RootBlog() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false }}>
      <Stack.Screen
        name="Blog"
        component={Blog}
        options={{ title: "Chia sẻ" }}
      />
      <Stack.Screen
        name="DetailBlog"
        component={DetailBlog}
        options={{ title: "Xem chi tiết" }}
      />
    </Stack.Navigator>
  );
}

export default RootBlog;
