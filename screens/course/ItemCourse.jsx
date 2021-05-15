import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";

import React, { useState, useEffect } from "react";
import { Button } from "native-base";
import Item from "../../common/course/Item";
import { Container, Header, Item as ItemBase, Input, Icon } from "native-base";
import useCateCourse from "../../common/hooks/useCateCourse";
import { useDebounce } from "../../common/hooks/useDebounce";

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
  const [search, setsearch] = useState("");
  const { data: data } = useCateCourse();
  const textSearch = useDebounce(search, 1000);
  useEffect(() => {
    console.log("Tìm kiếm cho " + search);
  }, [textSearch]);
  const screenHeight = Dimensions.get("window").height;
  return (
    <Container>
      <Header searchBar rounded>
        <ItemBase>
          <Icon name="ios-search" />
          <Input onChangeText={(txt) => setsearch(txt)} placeholder="Search" />
        </ItemBase>
      </Header>

      <View>
        <View style={[styles.rela]}>
          <Text style={[styles.abs, styles.center]}>Khóa mới</Text>
          <Image
            style={{ height: 150, width: "100%", flex: 1, borderRadius: 10 }}
            source={{
              uri: "https://www.classcentral.com/report/wp-content/uploads/2020/06/top-100-course-pandemic.png",
            }}
          ></Image>
        </View>
        <View style={[styles.rela]}>
          <Text style={[styles.abs, styles.center]}>Gợi ý cho bạn</Text>
          <Image
            style={{ height: 150, width: "100%", flex: 1, borderRadius: 10 }}
            source={{
              uri: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg",
            }}
          ></Image>
        </View>
        <Text style={{ fontSize: 20 }}>Phổ biến</Text>
        <View style={styles.listCate}>
          {data?.cate?.map((e, i) => {
            return (
              <View key={e.id_cate} style={[styles.rela, styles.w_50]}>
                <Text style={[styles.abs, styles.center]}>{e.name}</Text>
                <Image
                  source={{
                    uri: e.image,
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
                <Button key={Math.random()} style={styles.tags} light>
                  <Text>{e}</Text>
                </Button>
              );
            })}
          </View>
        </ScrollView>
        {data?.courses &&
          Object.keys(data?.courses).map((e, i) => {
            return (
              <View key={e}>
                <Text style={{ fontSize: 20 }}>{e}</Text>
                <Item course={data?.courses?.[e]}></Item>
              </View>
            );
          })}
      </View>
    </Container>
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
    // color: "#fff",
    fontSize: 16,
  },
});
// export  styles;
