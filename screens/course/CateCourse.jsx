import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { Button } from "native-base";
export default function CateCourse({ cate, onSuggest }) {
  const tags = [
    "PHP",
    "JavaScript",
    ".Net",
    "Nodejs",
    "ReactJS",
    "Laravel",
    "JavaSpring",
  ];
  const [id, setid] = useState(1);
  return (
    <View>
      <Animated.View style={[styles.rela]}>
        <Text style={[styles.abs, styles.center]}>Khóa mới</Text>
        <Image
          style={{
            height: 150,
            width: "100%",
            flex: 1,
            borderRadius: 10,
          }}
          source={{
            uri: "https://www.classcentral.com/report/wp-content/uploads/2020/06/top-100-course-pandemic.png",
          }}
        ></Image>
      </Animated.View>
      <Animated.View style={[styles.rela]}>
        <Text onPress={() => onSuggest()} style={[styles.abs, styles.center]}>
          Gợi ý cho bạn
        </Text>
        <Image
          style={{
            height: 150,
            width: "100%",
            flex: 1,
            borderRadius: 10,
          }}
          source={{
            uri: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg",
          }}
        ></Image>
      </Animated.View>
      <Text style={{ fontSize: 20 }}>Phổ biến</Text>
      <View style={styles.listCate}>
        {cate?.map((e, i) => {
          return (
            <Animated.View key={e.id_cate} style={[styles.rela, styles.w_50]}>
              <Text
                onPress={() => setid(e.id_cate)}
                style={[styles.abs, styles.center]}
              >
                {e.name}
              </Text>
              <Image
                source={{
                  uri: e.image,
                }}
                style={[
                  id == e.id_cate ? styles.active : {},
                  {
                    height: 80,
                    width: "100%",
                    flex: 1,
                    borderRadius: 10,
                  },
                ]}
              ></Image>
            </Animated.View>
          );
        })}
      </View>
      <Text style={{ fontSize: 20 }}>Dành cho bạn</Text>
      <ScrollView horizontal={true}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          {tags.map((e, i) => {
            return (
              <Button key={Math.random()} style={styles.tags} light>
                <Text>{e}</Text>
              </Button>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  tags: {
    borderRadius: 18,
    margin: 8,
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
  active: {
    borderColor: "#2573d8",
    borderStyle: "solid",
    borderWidth: 4,
  },
  abs: {
    position: "absolute",
  },
  center: {
    left: "50%",
    top: "50%",
    transform: [{ translateX: -60 }, { translateY: -10 }],
    zIndex: 9,
    // textTransform: "uppercase",
    fontWeight: "bold",
    // color: "#fff",
    fontSize: 18,
  },
});
