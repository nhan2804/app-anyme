import React from "react";
import PropTypes from "prop-types";
import { Image, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
import config from "../../api/config";

function ItemBlog(props) {
  const { name, title_blog, img_blog, created_at } = props.item;

  return (
    <Content>
      <Card style={{ padding: 1 }}>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: `${config.resource}${img_blog}` }} />
            <Body>
              <Text>{name}</Text>
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
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Thích</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Cmt</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
}

ItemBlog.propTypes = {};

export default ItemBlog;
