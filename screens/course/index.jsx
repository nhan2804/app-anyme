import { View } from "native-base";
import React from "react";
import { ScrollView } from "react-native";
import ItemCourse from "./ItemCourse";

function Course(props) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <ItemCourse />
      </ScrollView>
    </View>
  );
}

export default Course;
