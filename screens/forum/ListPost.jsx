import { Text, Button, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../../styles/forum";
import { getPosts } from "../../api/forum";
import useForum from "../../common/hooks/useForum";
import ItemForum from "../../components/forum/ItemForum";
import Modal from "react-native-modal";
import { Textarea, Form } from "native-base";
import NewPost from "./NewPost";
// import NewPost from "./NewPost";
function ListPosts({ navigation }) {
  const post = useForum();
  const [isOpen, setisOpen] = useState(false);
  function onView(id) {
    navigation.navigate("ViewPost", { id });
  }

  return (
    <View style={{ flex: 1 }}>
      <Button
        onPress={() => navigation.navigate("NewPost")}
        title="Bị bug à?"
      ></Button>

      <ScrollView>
        {post?.data?.data?.data?.data.map((e, i) => {
          return <ItemForum onView={onView} item={e} key={e.id_post} />;
        })}
      </ScrollView>
    </View>
  );
}

export default ListPosts;
