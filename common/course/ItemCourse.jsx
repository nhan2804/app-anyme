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
import Item from "./Item";

function ItemCourse(props) {
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
      <View style={[styles.rela]}>
        <Text style={[styles.abs, styles.center]}>Khóa mới</Text>
        <Image
          style={{ height: 150, width: "100%", flex: 1, borderRadius: 10 }}
          source={{
            uri:
              "https://www.classcentral.com/report/wp-content/uploads/2020/06/top-100-course-pandemic.png",
          }}
        ></Image>
      </View>
      <View style={[styles.rela]}>
        <Text style={[styles.abs, styles.center]}>Gợi ý cho bạn</Text>
        <Image
          style={{ height: 150, width: "100%", flex: 1, borderRadius: 10 }}
          source={{
            uri:
              "https://www.incimages.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg",
          }}
        ></Image>
      </View>
      <Text style={{ fontSize: 20 }}>Phổ biến</Text>
      <View style={styles.listCate}>
        {[...Array(4)].map((e, i) => {
          return (
            <View key={Math.random()} style={[styles.rela, styles.w_50]}>
              <Text style={[styles.abs, styles.center]}>Lập trình căn bản</Text>
              <Image
                source={{
                  uri:
                    "https://baokhuyennong.com/wp-content/uploads/2019/10/hinh-anh-hoa-cuc-hoa-mi-2.jpg",
                }}
                style={{
                  height: 80,
                  width: "100%",
                  flex: 1,
                  borderRadius: 10,
                }}
              ></Image>
            </View>
          );
        })}
      </View>
      <Text style={{ fontSize: 20 }}>Dành cho bạn</Text>
      <ScrollView horizontal={true}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          {tags.map((e, i) => {
            return (
              <Button style={styles.tags} light>
                <Text>{e}</Text>
              </Button>
            );
          })}
        </View>
      </ScrollView>
      <Text style={{ fontSize: 20 }}>Tất cả</Text>
      <Item></Item>
    </View>
  );
}

export default ItemCourse;
const styles = StyleSheet.create({
  tags: {
    borderRadius: 18,
    margin: 8,
    height: "unset",
  },
  listCate: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  w_50: {
    width: "50%",
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
