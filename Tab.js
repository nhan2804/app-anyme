import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Forum from "./screens/forum/index";
import Blog from "./screens/blog/index";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import Course from "./screens/course/index";
import User from "./screens/user/index";
import Manga from "./screens/manga/Manga";
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
          tabBarIcon: ({ tintColor }) => {
            return (
              <MaterialCommunityIcons name="home" color={tintColor} size={18} />
            );
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Forum",
          tabBarIcon: ({ tintColor }) => {
            return (
              <MaterialCommunityIcons name="book" color={tintColor} size={18} />
            );
          },
        }}
        name="Blog"
        component={Blog}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Khóa học",
          tabBarIcon: ({ tintColor }) => {
            return (
              <MaterialCommunityIcons
                name="console"
                color={tintColor}
                size={18}
              />
            );
          },
        }}
        name="Khóa học"
        component={Course}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Tài liệu",
          tabBarIcon: ({ tintColor }) => {
            return (
              <MaterialCommunityIcons
                name="file-document"
                color={tintColor}
                size={18}
              />
            );
          },
        }}
        name="Tài liệu"
        component={Course}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ tintColor }) => {
            return (
              <MaterialCommunityIcons
                name="nature-people"
                color={tintColor}
                size={18}
              />
            );
          },
        }}
        name="User"
        component={Manga}
      />
    </Tab.Navigator>
  );
}

TabNav.propTypes = {};

export default TabNav;
