import React from "react";
import { Text, View } from "react-native";
import { Rating as Rate, Avatar } from "react-native-elements";
import config from "../../../api/config";
import styles from "../../../styles/rating";
export default function ItemRating({ isEdit, rate, idUser }) {
  return (
    <View style={styles.itemCmt}>
      <View style={styles.av}>
        <Avatar
          rounded
          source={{
            uri: config.base + rate?.user?.avatar,
          }}
        />
        <Text style={styles.name}>
          {rate?.user?.displayname}{" "}
          {idUser ? (
            <Text
              onPress={() => {
                isEdit(true);
                console.log("ediit");
              }}
              style={{ color: "#3678f3" }}
            >
              : Bạn, sửa đánh giá này?
            </Text>
          ) : (
            ""
          )}
        </Text>
      </View>
      <View style={styles.rating}>
        <Rate
          type="star"
          style={{
            marginBottom: 5,
            position: "absolute",
            left: 0,
          }}
          imageSize={20}
          readonly
          startingValue={rate?.star_rate}
        />
        <Text style={styles.date}>{rate?.created_at.substring(0, 10)}</Text>
      </View>
      <View style={styles.contentCmt}>
        <Text style={styles.TxCon}>{rate?.comment}</Text>
      </View>
    </View>
  );
}
