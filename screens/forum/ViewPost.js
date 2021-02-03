import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { viewPost } from "../../api/forum";
import { WebView } from "react-native-webview";
function ViewPost({ route, navigation }) {
  const { id } = route.params;

  const [post, setPost] = useState({});
  const [cmts, setCmts] = useState([]);
  const handleView = () => {
    viewPost(id).then((res) => {
      setPost(res.data.datas);
      setCmts(res.data.allcmt.data);
      console.log(res.data.datas);
    });
  };
  function onView(id) {
    navigation.navigate("ViewPost", { id });
  }
  useEffect(handleView, []);

  return (
    <View>
      <Text style={{ fontSize: 35, fontWeight: "bold" }}>
        {post.displayname}
      </Text>
      <Text style={{ fontSize: 30 }}>{post.title_post}</Text>
      <Text style={{ fontSize: 20 }}>{post.content_post}</Text>
      <View>
        {cmts.map((e, i) => {
          return (
            <Text style={{ fontSize: 12 }}>
              {e.displayname} : {e.content_cmt}
            </Text>
          );
        })}
      </View>
    </View>
  );
}

export default ViewPost;
