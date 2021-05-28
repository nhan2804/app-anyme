import { View } from "native-base";
import { ScrollView } from "react-native";
import React from "react";
import Profile from "./Profile";
import contactData from "../../mocks/contact.json";
import MyCourse from "./Course";
import MyBlog from "./Blog";

function index(props) {
  return (
    <View>
      <ScrollView>
        {/* <Profile {...contactData} /> */}
        <MyCourse />
        <MyBlog />
      </ScrollView>
    </View>
  );
}

export default index;
