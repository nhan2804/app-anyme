import { View, Text } from "native-base";
import { ScrollView, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import MyCourse from "./Course";
import MyBlog from "./Blog";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import useUser from "../../common/hooks/my/useUser";
import config from "../../api/config";

function index(props) {
  const { data } = useUser();
  const [tab, setTab] = useState(0);

  const tabs = [
    { index: 0, title: "Khóa học của tôi" },
    { index: 1, title: "Bài viết của tôi" },
    { index: 2, title: "Câu hỏi của tôi" },
  ];
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.userRow}>
          <Image
            style={styles.userImage}
            source={{
              uri: config.base + data?.avatar,
            }}
          />
          <View style={styles.userNameRow}>
            <Text style={styles.userNameText}>{data?.displayname}</Text>
          </View>
          <View style={styles.userBioRow}>
            <Text style={styles.userBioText}>{data?.sign}</Text>
          </View>
        </View>
        <View style={styles.socialRow}>
          <View>
            <Icon
              size={30}
              type="entypo"
              color="#3B5A98"
              name="facebook"
              onPress={() => console.log("facebook")}
            />
          </View>
          <View style={styles.socialIcon}>
            <Icon
              size={30}
              color="#56ACEE"
              name="twitter"
              onPress={() => console.log("twitter")}
            />
          </View>
          <View>
            <Icon
              size={30}
              color="#DD4C39"
              name="google"
              onPress={() => console.log("google")}
            />
          </View>
        </View>
      </View>
      <View style={styles.flex}>
        {tabs.map((e, i) => {
          return (
            <Text
              style={[styles.p, e.index == tab ? styles.active : {}]}
              onPress={() => setTab(e.index)}
            >
              {e.title}
            </Text>
          );
        })}
      </View>
      <ScrollView>
        {tab == 0 && <MyCourse />}
        {tab == 1 && <MyBlog />}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  active: {
    fontWeight: "bold",
    color: "#379ff3",
  },
  cardContainer: {
    flex: 1,
  },
  p: {
    padding: 20,
  },
  container: {
    flex: 1,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
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

export default index;
