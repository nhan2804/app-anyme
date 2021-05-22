import React, { Component } from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
} from "native-base";
import config from "../../api/config";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
function ItemForum({ item, onView }) {
  const handleView = (id) => {
    onView(id);
  };
  return (
    <Card style={{ flex: 0 }}>
      <CardItem>
        <Left>
          <Thumbnail
            source={{
              uri: `${config.base}${item.avatar}`,
            }}
          />
          <Body>
            <Text>{item.displayname}</Text>
            <Text note>{item.created_at}</Text>
          </Body>
        </Left>
      </CardItem>

      <CardItem>
        <Body>
          <Text>{item.title_post}</Text>
          {/* <Image
            source={{
              uri:
                "https://c4.wallpaperflare.com/wallpaper/432/692/1019/anime-my-teen-romantic-comedy-snafu-yukino-yukinoshita-wallpaper-preview.jpg",
            }}
            style={{ height: 200, width: 200, flex: 1 }}
          /> */}
          <Text>{item.content_post}</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent textStyle={{ color: "#87838B" }}>
            <Icon name="heart" />
            <Text>{item.like_post} Yêu thích</Text>
          </Button>
          <Button
            onPress={() => handleView(item.id_post)}
            transparent
            textStyle={{ color: "#87838B" }}
          >
            <Icon name="comment" />
            <Text>{item.comments} Bình luận</Text>
          </Button>
          <Button transparent textStyle={{ color: "#87838B" }}>
            <Icon name="eye" />
            <Text>{item.views} View</Text>
          </Button>
        </Left>
      </CardItem>
    </Card>
  );
}
ItemForum.propTypes = {
  onView: PropTypes.func,
};
export default ItemForum;
