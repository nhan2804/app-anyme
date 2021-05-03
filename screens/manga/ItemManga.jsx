import React from "react";
import { Text, Image, View } from "react-native";

function ItemManga(props) {
  const { thumbnail, name } = props.manga;
  let thumb = thumbnail.replace("https://khotruyen.net", "");

  return (
    <View>
      <Image source={{ uri: thumb }} style={{ width: 150, height: 200 }} />
      <Text>{name}</Text>
    </View>
  );
}
export default ItemManga;
