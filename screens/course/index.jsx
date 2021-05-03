import { View } from "native-base";
import React from "react";
import { ScrollView } from "react-native";
import ItemCourse from "../../common/course/ItemCourse";

function Course(props) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ItemCourse />
      </ScrollView>
    </View>
  );
}

export default Course;
