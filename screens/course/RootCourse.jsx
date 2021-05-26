import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Course from "./Course";
import DetailCourse from "./DetailCourse";
import Suggest from "./Suggest";
function RootCourse() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false }}>
      <Stack.Screen
        name="ListCourse"
        component={Course}
        options={{ title: "Khóa học" }}
      />
      <Stack.Screen
        name="DetailCourse"
        component={DetailCourse}
        options={{ title: "Xem chi tiết" }}
      />
      <Stack.Screen
        name="SuggestCourse"
        component={Suggest}
        options={{ title: "Gợi ý cho bạn" }}
      />
    </Stack.Navigator>
  );
}

export default RootCourse;
