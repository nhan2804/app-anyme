import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Course from "./Course";
import DetailCourse from "./DetailCourse";
function RootCourse() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}

export default RootCourse;
