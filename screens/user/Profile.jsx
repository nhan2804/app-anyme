import React, { useState } from "react";
import { Animated, View, StyleSheet, Text, Image, ScrollView } from "react-native";
import PropTypes from "prop-types";
import Posts from "./Posts";
import {Icon} from "react-native-elements";
import { TabView, TabBar } from "react-native-tab-view";

function Profile(props) {

 const propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    tabContainerStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
    ]),
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        words: PropTypes.string.isRequired,
        sentence: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
        image: PropTypes.string,
        user: PropTypes.shape({
          name: PropTypes.string.isRequired,
          username: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
        }),
      })
    ).isRequired,
  }

  const defaultProps = {
    containerStyle: {},
    tabContainerStyle: {},
  }

  const [tabs, setValues] = useState({
    tabs: {
      index: 0,
      routes: [
        { key: '1', title: 'My Courses', count: 2 },
        { key: '2', title: 'My Post', count: 10 },
        { key: '3', title: 'My Blog', count: 50 }
      ],
    }
  });

  const onPressPlace = () => {
    console.log("place");
  };

  const handleIndexChange = (index) => {
    setValues({
      tabs: {
        ...tabs.tabs,
        index,
      }
    });
  };

  const renderTabBar = (props) => {
    return (
      <TabBar
        indicatorStyle={styles.indicatorTab}
        renderLabel={renderLabel(props)}
        pressOpacity={0.8}
        style={styles.tabBar}
        {...props}
      />
    );
  };

  const renderLabel =
    (props) =>
    ({ route }) => {
      const routes = props.navigationState.routes;

      let labels = [];
      routes.forEach((e, index) => {
        labels.push(index === props.navigationState.index ? "black" : "gray");
      });

      const currentIndex = parseInt(route.key) - 1;
      const color = labels[currentIndex];

      return (
        <View>
          <Animated.Text style={[styles.tabLabelText, { color }]}>
            {route.count}
          </Animated.Text>
          <Animated.Text style={[styles.tabLabelNumber, { color }]}>
            {route.title}
          </Animated.Text>
        </View>
      );
    };

  const renderScene = ({ route: { key } }) => {
    const { posts } = props;

    switch (key) {
      case "1":
        return <Posts containerStyle={styles.sceneContainer} posts={posts} />;
      case "2":
        return <Posts containerStyle={styles.sceneContainer} posts={posts} />;
      case "3":
        return <Posts containerStyle={styles.sceneContainer} posts={posts} />;
      default:
        return <View />;
    }
  };

  const renderContactHeader = () => {
    const { avatar, name, bio } = props;

    return (
      <View style={styles.headerContainer}>
        <View style={styles.userRow}>
          <Image style={styles.userImage} source={{ uri: 'https://i.pinimg.com/originals/0a/b0/84/0ab084c73cb730e4ac0eff47ad85c721.png' }} />
          <View style={styles.userNameRow}>
            <Text style={styles.userNameText}>{name}</Text>
          </View>
          <View style={styles.userBioRow}>
            <Text style={styles.userBioText}>{bio}</Text>
          </View>
        </View>
        <View style={styles.socialRow}>
          <View>
            <Icon
              size={30}
              type="entypo"
              color="#3B5A98"
              name="facebook-with-circle"
              onPress={() => console.log("facebook")}
            />
          </View>
          <View style={styles.socialIcon}>
            <Icon
              size={30}
              type="entypo"
              color="#56ACEE"
              name="twitter-with-circle"
              onPress={() => console.log("twitter")}
            />
          </View>
          <View>
            <Icon
              size={30}
              type="entypo"
              color="#DD4C39"
              name="google--with-circle"
              onPress={() => console.log("google")}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={[styles.container, props.containerStyle]}>
        <View style={styles.cardContainer}>
          {renderContactHeader()}
          <TabView
            style={[styles.tabContainer, props.tabContainerStyle]}
            navigationState={tabs.tabs}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={handleIndexChange}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: "center",
    backgroundColor: "#FFF",
    marginBottom: 10,
    marginTop: 45,
  },
  indicatorTab: {
    backgroundColor: "transparent",
  },
  scroll: {
    backgroundColor: "#FFF",
  },
  sceneContainer: {
    marginTop: 10,
  },
  socialIcon: {
    marginLeft: 14,
    marginRight: 14,
  },
  socialRow: {
    flexDirection: "row",
  },
  tabBar: {
    backgroundColor: "#EEE",
  },
  tabContainer: {
    flex: 1,
    marginBottom: 12,
  },
  tabLabelNumber: {
    color: "gray",
    fontSize: 12.5,
    textAlign: "center",
  },
  tabLabelText: {
    color: "black",
    fontSize: 22.5,
    fontWeight: "600",
    textAlign: "center",
  },
  userBioRow: {
    marginLeft: 40,
    marginRight: 40,
  },
  userBioText: {
    color: "gray",
    fontSize: 13.5,
    textAlign: "center",
  },
  userImage: {
    borderRadius: 60,
    height: 120,
    marginBottom: 10,
    width: 120,
  },
  userNameRow: {
    marginBottom: 10,
  },
  userNameText: {
    color: "#5B5A5A",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  userRow: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 12,
  },
});

export default Profile;
