import { Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import ListPost from "../../components/forum/listPost";
import styles from "../../styles/forum";
import getPosts from "../../api/forum";

function ListPost(props) {
  const [posts, setPosts] = useState([]);
  const handleLoadAnime = () => {
    getPosts().then((res) => {
      setPosts(res.data.data.data);
    });
  };
  useEffect(handleLoadAnime, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView>
        <View style={styles.list}>
          <Text>List Author</Text>
          <ListPost posts={posts}></ListPost>
        </View>
      </ScrollView>
    </View>
  );
}

ListPost.propTypes = {};

export default ListPost;
