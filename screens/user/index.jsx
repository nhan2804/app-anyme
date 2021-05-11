import { View } from "native-base";
import { ScrollView} from "react-native";
import React from "react";
import Profile from "./Profile";

function index(props) {
  return <View>
    <ScrollView>
      <Profile/>
    </ScrollView>
  </View>;
}

export default index;
