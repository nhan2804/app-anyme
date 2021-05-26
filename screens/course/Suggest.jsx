import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/sugg";
import { Rating } from "react-native-elements";
import useSuggestCourse from "../../common/hooks/useSuggestCourse";
import config from "../../api/config";
const Suggest = () => {
  const { data: courses } = useSuggestCourse();
  console.log(courses);
  console.log("alos ");
  return (
    <ScrollView>
      {courses?.map((e, i) => {
        return (
          <View key={e.id_course} style={styles.divPrdItem}>
            <View style={styles.imgPrc}>
              <Image
                style={styles.img}
                source={{
                  uri: config.resource + e.img_course,
                }}
              />
            </View>
            <View style={styles.Citem}>
              <Text style={styles.title}>{e.title_course}</Text>
              <View style={styles.desc}>
                <Text style={styles.descTx}>
                  {e.coin} Coin . {e.created_at.substring(0, 10)} . recommended
                </Text>
                <Rating
                  style={styles.rating}
                  type="custom"
                  imageSize={15}
                  readonly
                  ratingBackgroundColor="#969696"
                  startingValue={4}
                />
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Suggest;
