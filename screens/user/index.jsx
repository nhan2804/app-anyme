import { View } from "native-base";
import { ScrollView } from "react-native";
import React from "react";
import Profile from "./Profile";
import contactData from "../../mocks/contact.json";
import PropTypes from "prop-types";

function index(props) {
  return (
    <View>
      <ScrollView>
        <Profile {...contactData} />
      </ScrollView>
    </View>
  );
}

export default index;
