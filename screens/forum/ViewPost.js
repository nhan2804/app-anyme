import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { viewPost } from "../../api/forum";
import ItemForum from "../../components/forum/ItemForum";
import Comment from "./Comment";

function ViewPost({ route, navigation }) {
  const { id } = route.params;

  const [post, setPost] = useState({});
  const [cmts, setCmts] = useState([]);
  const handleView = () => {
    viewPost(id).then((res) => {
      setPost(res.data.datas);
      setCmts(res.data.allcmt.data);
    });
  };
  console.log(cmts?.[0]);
  function onView(id) {
    navigation.navigate("ViewPost", { id });
  }
  useEffect(handleView, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ItemForum item={post} />
        <WebView source={{ html: "<h1>App của tôi này !! </h1>" }} />

        <View>
          {cmts.map((e, i) => {
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
