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

import Item from "../../common/course/Item";
import { Container, Header, Item as ItemBase, Input, Icon } from "native-base";
import useCateCourse from "../../common/hooks/useCateCourse";
import { useDebounce } from "../../common/hooks/useDebounce";
import CateCourse from "./CateCourse";

function Course(props) {
  const [search, setsearch] = useState("");

  const textSearch = useDebounce(search, 1000);
  const { data: data } = useCateCourse(textSearch);
  const viewCourse = (id) => {
    props.navigation.navigate("DetailCourse", {
      id,
    });
  };
  const onSuggest = () => {
    props.navigation.navigate("SuggestCourse");
  };
  return (
    <Container>
      <Header searchBar rounded>
        <ItemBase>
          <Icon name="ios-search" />
          <Input onChangeText={(txt) => setsearch(txt)} placeholder="Search" />
        </ItemBase>
      </Header>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          {!!search.length && <Text>Tìm kiếm cho : {search}</Text>}
          {search.length == 0 && (
            <CateCourse onSuggest={onSuggest} cate={data?.cate} />
          )}
          {data?.courses &&
            Object.keys(data?.courses).map((e, i) => {
              return (
                <View key={e}>
                  <Text style={{ fontSize: 20 }}>{e}</Text>
                  <Item
                    viewCourse={viewCourse}
                    course={data?.courses?.[e]}
                  ></Item>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </Container>
  );
}

export default Course;
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
  abs: {
    position: "absolute",
  },
});
// export  styles;
