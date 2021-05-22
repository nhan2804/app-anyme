import React, { useState } from "react";
import {
  List,
  ListItem,
  Left,
  Body,
  Thumbnail,
  Text,
  View,
  Input,
  Right,
  Button,
} from "native-base";
import config from "../../api/config";
import { TextInput } from "react-native";
import useComment from "../../common/hooks/useComment";
export default function User({ cmt, post }) {
  const [text, settext] = useState("");
  const { mutate: newCmt } = useComment();
  const handleCmt = () => {
    newCmt(
      { content: text, id_post: post?.id_post, id_rec: post?.auth_post },
      {
        onSuccess: (data) => {
          console.log(data);
        },
      }
    );
  };
  return (
    <List>
      <ListItem avatar>
        <Left>
          <Thumbnail source={{ uri: config.base + cmt?.avatar }} />
        </Left>
        <Body>
          <View style={{ paddingLeft: "40px" }}>
            <Text>{cmt?.displayname}</Text>
            <TextInput onChangeText={settext} value={text} />
          </View>
        </Body>
      </ListItem>
      <Right>
        <Button onPress={handleCmt}>Bình luận</Button>
      </Right>
    </List>
  );
}
