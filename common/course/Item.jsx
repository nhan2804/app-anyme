import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";

import React from "react";
import { Button } from "native-base";

function Item(props) {
  const tags = [
    "PHP",
    "JavaScript",
    ".Net",
    "Nodejs",
    "ReactJS",
    "Laravel",
    "JavaSpring",
  ];
  const screenHeight = Dimensions.get("window").height;
  return (
    <View>
      <ScrollView horizontal={true}>
        <View style={styles.listCate}>
          {[...Array(4)].map((e, i) => {
            return (
              <View
                key={Math.random()}
                style={[
                  styles.w_65,
                  { margin: 8 },
                  { backgroundColor: "#5c5b5b" },
                  { borderRadius: 8 },
                ]}
              >
                <Image
                  source={{
                    uri:
                      "https://baokhuyennong.com/wp-content/uploads/2019/10/hinh-anh-hoa-cuc-hoa-mi-2.jpg",
                  }}
                  style={{
                    height: 140,
                    width: "100%",
                    flex: 1,
                  }}
                ></Image>
                <View>
                  <Text style={[{ fontSize: 20 }, styles.white]}>
                    Lập trình căn bản
                  </Text>
                  <Text style={styles.white}>Mới</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default Item;
const styles = StyleSheet.create({
  white: {
    color: "#fff",
  },
  tags: {
    borderRadius: 18,
    margin: 8,
    height: "unset",
  },
  listCate: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // flexWrap: "wrap",
  },
  w_65: {
    width: "36%",
  },
  rela: {
    position: "relative",
    padding: 8,
    overflow: "hidden",
  },
  abs: {
    position: "absolute",
  },
  center: {
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 9,
    // textTransform: "uppercase",
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
  },
});
// export  styles;
