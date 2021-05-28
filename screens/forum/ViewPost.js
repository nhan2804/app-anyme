import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ItemForum from "../../components/forum/ItemForum";
import Comment from "./Comment";
import useInfo from "../../common/hooks/useInfo";
import User from "../../components/user";
import useDetailForum from "../../common/hooks/useDetailForum";
import { Header } from "react-native-elements";

function ViewPost({ route, navigation }) {
  const { id } = route.params;
  const { data: info } = useInfo();

  const { data: post } = useDetailForum(id);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Header
          leftComponent={{ icon: "home", color: "#fff" }}
          centerComponent={{ text: "Chi tiết", style: { color: "#fff" } }}
        />
        <ItemForum isDetail={true} item={post?.datas} />
        <View>
          <User post={post?.datas} cmt={info}></User>
        </View>
        <View>
          {post?.allcmt?.data?.map((e, i) => {
            return <Comment key={e.id_cmt} item={e} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  video: {
    marginTop: 20,
    maxHeight: 200,
    width: 320,
    flex: 1,
  },
});

export default ViewPost;
