import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Forum from "./screens/forum/index";
import Blog from "./screens/blog/index";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import User from "./screens/user/index";
import RootCourse from "./screens/course/RootCourse";
import Document from "./screens/document";
const Tab = createBottomTabNavigator();
function TabNav(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#0000ff",
      }}
    >
      <Tab.Screen
        name="Forum"
        component={Forum}
        options={{
          tabBarLabel: "Forum",
          tabBarIcon: ({ tintColor, focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"}
                color={"#007bff"}
                size={20}
              />
            );
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Chia sẻ",
          tabBarIcon: ({ tintColor, focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "book" : "book-outline"}
                color={"#007bff"}
                size={20}
              />
            );
          },
        }}
        name="Blog"
        component={Blog}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Khóa học",
          tabBarIcon: ({ tintColor, focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "alpha-c-box" : "alpha-c-box-outline"}
                color={"#007bff"}
                size={20}
              />
            );
          },
        }}
        name="Khóa học"
        component={RootCourse}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Tài liệu",
          tabBarIcon: ({ tintColor, focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "file-document" : "file-document-outline"}
                color={"#007bff"}
                size={20}
              />
            );
          },
        }}
        name="Document"
        component={Document}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ tintColor, focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "account-circle" : "account-circle-outline"}
                color={"#007bff"}
                size={20}
              />
            );
          },
        }}
        name="User"
        component={User}
      />
    </Tab.Navigator>
  );
}

TabNav.propTypes = {};

export default TabNav;
