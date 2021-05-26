import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";

import React from "react";
import { Button } from "native-base";
import config from "../../api/config";
// import { TouchableOpacity } from "react-native-gesture-handler";

function Item({ course, viewCourse }) {
  const screenHeight = Dimensions.get("window").height;
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <View style={styles.listCate}>
          {course?.map((e, i) => {
            return (
              <TouchableOpacity
                style={styles.item}
                onPress={() => viewCourse(e.id_course)}
              >
                <View
                  key={e.id_course}
                  style={[
                    styles.w_65,
                    { margin: 8 },
                    { backgroundColor: "#5c5b5b" },
                    { borderRadius: 8 },
                  ]}
                >
                  <Image
                    source={{
                      uri: config.resource + e.img_course,
                    }}
                    style={{
                      height: 180,
                      width: "100%",
                      // flex: 1,
                    }}
                  ></Image>
                  <View style={styles.item}>
                    <Text style={[{ fontSize: 20 }, styles.white]}>
                      {e.title_course.substring(0, 20) + "..."}
                    </Text>
                    <Text style={styles.white}>Mới</Text>
                  </View>
                </View>
              </TouchableOpacity>
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
  item: {
    padding: 4,
  },
  listCate: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // flexWrap: "wrap",
  },
  w_65: {
    width: 280,
  },
  rela: {
    position: "relative",
    padding: 8,
    overflow: "hidden",
  },
  abs: {
    position: "absolute",
  },
});
// export  styles;
