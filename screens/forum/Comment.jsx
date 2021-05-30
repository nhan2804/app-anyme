import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  View,
} from "native-base";
import config from "../../api/config";
import { WebView } from "react-native-webview";
import { Image } from "react-native";
function Comment(props) {
  const cmt = props.item;
  return (
    <List>
      <ListItem avatar>
        <Left>
          <Thumbnail source={{ uri: config.base + cmt?.avatar }} />
        </Left>
        <Body>
          <View style={{ paddingLeft: 0 }}>
            <Text>{cmt?.displayname}</Text>
            <View style={{ flex: 1 }}>
              <Text>{cmt?.content_cmt}</Text>
              {cmt?.img && (
                <Image
                  style={{ width: "100%", minHeight: 200 }}
                  source={{ uri: cmt?.img }}
                ></Image>
              )}
            </View>
          </View>
        </Body>
        <View>
          <WebView
            source={{
              html: cmt?.content_cmt,
            }}
          />
        </View>
        <Right>
          <Text note>{cmt?.created_at.substring(10, 16)}</Text>
        </Right>
      </ListItem>
    </List>
  );
}
export default Comment;
