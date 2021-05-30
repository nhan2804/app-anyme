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
import useLikeForum from "../../common/hooks/useLikeForum";
function ItemForum({ item, onView, isDetail }) {
  const handleView = (id) => {
    onView(id);
  };

  const { mutate: onLike } = useLikeForum();
  const handleLike = (id) => {
    console.log("id" + id);
    onLike(id);
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

          {isDetail && <Text>{item?.content_post}</Text>}
          {item?.img && (
            <Image
              source={{
                uri: item?.img,
              }}
              style={{ height: 200, width: "100%", flex: 1 }}
            />
          )}
          <WebView
            style={{ maxHeight: 200 }}
            source={{ html: item?.content_post }}
          />
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          {item?.id_auth_cmt && (
            <Button transparent textStyle={{ color: "#87838B" }}>
              <Icon size={18} color="red" name="heart" />
              <Text>{item?.like_post} Yêu thích ,Bạn</Text>
            </Button>
          )}
          {!item?.id_auth_cmt && (
            <Button
              onPress={() => handleLike(item?.id_post)}
              transparent
              textStyle={{ color: "#87838B" }}
            >
              <Icon size={18} color="red" name="heart-outline" />
              <Text>{item?.like_post} Yêu thích </Text>
            </Button>
          )}
        </Left>
        <Body>
          <Button
            onPress={() => handleView(item?.id_post)}
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
