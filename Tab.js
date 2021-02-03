import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Forum from "./screens/forum/index";
import Blog from "./screens/blog/index";
const Tab = createBottomTabNavigator();
function TabNav(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Forum" component={Forum} />
      <Tab.Screen name="Blog" component={Blog} />
    </Tab.Navigator>
  );
}

TabNav.propTypes = {};

export default TabNav;
