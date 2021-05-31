import { Text, Button, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import useForum from "../../common/hooks/useForum";
import ItemForum from "../../components/forum/ItemForum";
import { Header, Button as Btn } from "react-native-elements";
import { FAB } from "react-native-elements";
import useInfinityScroll from "../../common/hooks/useInfinityScroll";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import NewPost from "./NewPost";
function ListPosts({ navigation }) {
  const post = useForum();
  const [isOpen, setisOpen] = useState(false);
  function onView(id) {
    navigation.navigate("ViewPost", { id });
  }
  const {
    data: forums,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfinityScroll();
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };
  // console.log(forums?.pages?.[1]);
  const from = forums?.pages?.[0]?.from;
  return (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={{ icon: "home", color: "#fff" }}
        centerComponent={{ text: "Trang chủ", style: { color: "#fff" } }}
      />

      <ScrollView
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            if (!(!hasNextPage || isFetchingNextPage)) {
              fetchNextPage();
            }
          }
        }}
        scrollEventThrottle={400}
      >
        {forums?.pages?.map((e0, i) => {
          return e0?.data.map((e, i) => {
            return <ItemForum onView={onView} item={e} key={e.id_post} />;
          });
        })}
        {(hasNextPage || isFetchingNextPage) && (
          <Btn loading={true} type="clear"></Btn>
        )}
      </ScrollView>

      <FAB
        onPress={() => navigation.navigate("NewPost")}
        placement="right"
        title="Hỏi ngay +"
      />
    </View>
  );
}

export default ListPosts;
