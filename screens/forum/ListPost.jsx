import { Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../../styles/forum";
import { getPosts } from "../../api/forum";
import useForum from "../../common/hooks/useForum";
import ItemForum from "../../components/forum/ItemForum";
import NewPost from "./NewPost";
function ListPosts({ navigation }) {
  const post = useForum();
  function onView(id) {
    navigation.navigate("ViewPost", { id });
  }
  return (
    <View style={{ flex: 1 }}>
      <NewPost />
      <ScrollView>
        {post?.data?.data?.data?.data.map((e, i) => {
          return <ItemForum onView={onView} item={e} key={e.id_post} />;
        })}
      </ScrollView>
    </View>
  );
}

export default ListPosts;
