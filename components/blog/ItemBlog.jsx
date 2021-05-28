import React from "react";
import PropTypes from "prop-types";
import { Image, View } from "react-native";
import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
} from "native-base";
import config from "../../api/config";

function ItemBlog(props) {
  const {
    name,
    title_blog,
    img_blog,
    created_at,
    id_blog,
    avatar,
    displayname,
    color_cate,
  } = props.item;
  console.log("item id" + id_blog);
  console.log(title_blog);
  return (
    <Content>
      <Card style={{ padding: 1 }}>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: `${config.base}${avatar}` }} />
            <Body>
              <Text>
                {displayname}{" "}
                <Text style={{ backgroundColor: color_cate, borderRadius: 4 }}>
                  {name}
                </Text>
              </Text>
              <Text note>{created_at}</Text>
            </Body>
          </Left>
        </CardItem>
        <Text>{title_blog}</Text>
        <CardItem cardBody>
          <Image
            source={{ uri: `${config.resource}${img_blog}` }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left></Left>
          <Body></Body>
          <Right>
            <Text onPress={() => props.onView(id_blog)}>{created_at}</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
}

ItemBlog.propTypes = {};

export default ItemBlog;
