import React, { useState } from "react";
import { Text, View } from "react-native";
import { Rating as Rate, Avatar, Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import config from "../../../api/config";
import useEditRate from "../../../common/hooks/useEditRate";
import useNewRate from "../../../common/hooks/useNewRate";
import styles from "../../../styles/rating";
export default function EditRating({ isEdit, rate, id }) {
  const { mutate: onEdit, isLoading } = useEditRate();
  const [num_rate, setrate] = useState(rate?.star_rate);
  const [text, setText] = useState(rate?.comment);
  const handleRate = () => {
    onEdit(
      { id_ra: rate?.id, id, text, num_rate },
      {
        onSuccess: () => {
          isEdit(false);
        },
      }
    );
  };

  return (
    <View style={styles.itemCmt}>
      <View style={styles.av}>
        <Avatar
          rounded
          source={{
            uri: config.base + rate?.user?.avatar,
          }}
        />
        <Text style={styles.name}>{rate?.user?.displayname}</Text>
      </View>
      <View style={styles.rating}>
        <Rate
          onFinishRating={setrate}
          type="star"
          style={{
            marginBottom: 5,
            position: "absolute",
            left: 0,
          }}
          imageSize={20}
          startingValue={5}
        />
        <Text style={styles.date}>{""}</Text>
      </View>
      <View style={styles.contentCmt}>
        <Input
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder="Nhập nhận xét của bạn về khóa này"
        ></Input>
        <Button
          onPress={handleRate}
          type="outline"
          iconRight
          loading={isLoading}
          style={{ width: 20 }}
          icon={<Icon name="send" size={18} color="#3dbeec" />}
          title="Sửa thay đổi"
        />
      </View>
    </View>
  );
}
