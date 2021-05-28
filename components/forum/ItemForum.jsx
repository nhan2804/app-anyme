import React, { Component } from "react";
import { Image, View } from "react-native";
import PropTypes from "prop-types";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
} from "native-base";
import config from "../../api/config";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import WebView from "react-native-webview";
function ItemForum({ item, onView, isDetail }) {
  const handleView = (id) => {
    onView(id);
  };
  return (
    <Card style={{ flex: 0 }}>
      <CardItem>
        <Left>
          <Thumbnail
            source={{
              uri: `${config.base}${item?.avatar}`,
            }}
          />
          <Body>
            <Text>{item?.displayname}</Text>
            <Text note>{item?.created_at}</Text>
          </Body>
        </Left>
      </CardItem>

      <CardItem>
        <Body>
          <Text>{item?.title_post}</Text>
          {/* <Image
            source={{
              uri:
                "https://c4.wallpaperflare.com/wallpaper/432/692/1019/anime-my-teen-romantic-comedy-snafu-yukino-yukinoshita-wallpaper-preview.jpg",
            }}
            style={{ height: 200, width: 200, flex: 1 }}
          /> */}
          {isDetail && <Text>{item?.content_post}</Text>}
          <WebView
            style={{ maxHeight: 200 }}
            source={{ html: item?.content_post }}
          />
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent textStyle={{ color: "#87838B" }}>
            <Icon size={18} color="red" name="heart-outline" />
            <Text>{item?.like_post} Yêu thích</Text>
          </Button>
        </Left>
        <Body>
          <Button
            onPress={() => handleView(item.id_post)}
            transparent
            textStyle={{ color: "#87838B" }}
          >
            <Icon size={18} color="#2880f3" name="comment-outline" />
            <Text>{item?.comments} Bình luận</Text>
          </Button>
        </Body>
        <Right>
          <Button transparent textStyle={{ color: "#87838B" }}>
            <Icon size={18} color="#2880f3" name="eye-outline" />
            <Text>{item?.views} View</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
}
ItemForum.propTypes = {
  onView: PropTypes.func,
};
export default ItemForum;
