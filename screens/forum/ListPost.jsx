import { Text, Button, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import useForum from "../../common/hooks/useForum";
import ItemForum from "../../components/forum/ItemForum";
import { Header } from "react-native-elements";
import { FAB } from "react-native-elements";
// import NewPost from "./NewPost";
function ListPosts({ navigation }) {
  const post = useForum();
  const [isOpen, setisOpen] = useState(false);
  function onView(id) {
    navigation.navigate("ViewPost", { id });
  }

  return (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={{ icon: "home", color: "#fff" }}
        centerComponent={{ text: "Trang chủ", style: { color: "#fff" } }}
      />
      {/* <Button
        onPress={() => navigation.navigate("NewPost")}
        title="Bị bug à?"
      ></Button> */}

      <ScrollView>
        {post?.data?.data?.data?.data.map((e, i) => {
          return <ItemForum onView={onView} item={e} key={e.id_post} />;
        })}
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
