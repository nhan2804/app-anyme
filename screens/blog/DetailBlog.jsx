import { Body, Left, Thumbnail } from "native-base";
import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import WebView from "react-native-webview";
import config from "../../api/config";
import useDetailBlog from "../../common/hooks/useDetailBlog";

export default function DetailBlog({ route }) {
  const { id } = route.params;
  const { data } = useDetailBlog(id);

  const blog = data?.data;

  return (
    <ScrollView style={{ width: "100%" }}>
      <View>
        <Left style={{ marginBottom: 10 }}>
          <Thumbnail source={{ uri: `${config.base}${blog?.avatar}` }} />
          <Text>{blog?.displayname}</Text>
          <Body>
            <Text>{blog?.title_blog}</Text>
          </Body>
        </Left>
        <Image
          source={{ uri: `${config.resource}${blog?.img_blog}` }}
          style={{ height: 250, width: null }}
        />

        <WebView
          style={{ width: "100%", height: 10000, flex: 1 }}
          source={{
            html:
              "<style>*{ font-size: 40px; word-wrap: break-word; } a{color:#6393eb}</style>" +
              blog?.content_blog,
          }}
        />
      </View>
    </ScrollView>
  );
}
