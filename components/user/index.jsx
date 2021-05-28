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
  Textarea,
} from "native-base";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import config from "../../api/config";
import { TextInput } from "react-native";
import useComment from "../../common/hooks/useComment";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default function User({ cmt, post }) {
  const [text, settext] = useState("");
  const { mutate: newCmt, isLoading } = useComment();
  const handleCmt = () => {
    newCmt(
      { content: text, id_post: post?.id_post, id_rec: post?.auth_post },
      {
        onSuccess: (data) => {
          settext("");
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
        {/* <Body> */}
        <View style={{ paddingLeft: 15, width: "100%", paddingRight: 20 }}>
          <Text>{cmt?.displayname}</Text>

          <Textarea
            placeholder="Nhập để bình luận"
            style={{
              backgroundColor: "#e8e8e8",
              width: "90%",
              borderRadius: 5,
            }}
            onChangeText={settext}
            value={text}
          ></Textarea>
        </View>
        {/* </Body> */}
      </ListItem>
      <View style={styles.right}>
        <Button
          loading={isLoading}
          icon={<Icon name="send" size={20} color="white" />}
          iconRight
          title="Bình luận"
          onPress={handleCmt}
        >
          <Text></Text>
        </Button>
      </View>
    </List>
  );
}

const styles = StyleSheet.create({
  list: {
    display: "flex",
  },
  right: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 8,
  },
});
