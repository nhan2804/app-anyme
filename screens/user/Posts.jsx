import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Post from "./Post";
function Posts(props) {
  return (
    <FlatList
      scrollEnabled={false}
      removeClippedSubviews={false}
      contentContainerStyle={[styles.container, props.containerStyle]}
      data={props.posts}
      renderItem={(list) => {
        return (
          <Post
            key={`post-${list.item.id}`}
            containerStyle={styles.postContainer}
            {...list.item}
          />
        );
      }}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  postContainer: {
    justifyContent: "space-between",
    marginBottom: 5,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10,
    padding: 0,
    borderWidth: 0,
  },
});
export default Posts;
