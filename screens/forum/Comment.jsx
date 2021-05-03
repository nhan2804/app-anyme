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
function Comment(props) {
  const cmt = props.item;
  return (
    <List>
      <ListItem avatar>
        <Left>
          <Thumbnail source={{ uri: config.base + cmt.avatar }} />
        </Left>
        <Body>
          <View style={{ paddingLeft: "40px" }}>
            <Text>{cmt.displayname}</Text>
            <Text note>
              {cmt.content_cmt} dài dài dài dài dài dài dài dài dài dài dài dài
              NativeBase includes components such as anatomy of your app
              screens, header, input, buttons, badge, icon, form, checkbox,
              radio-button, list, card, actionsheet, picker, segment, swipeable
              list, tabs, toast, drawer, thumbnail, spinner, layout, search bar
              etc. You can style these components with StyleSheet objects.
            </Text>
          </View>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem>
    </List>
  );
}
export default Comment;
