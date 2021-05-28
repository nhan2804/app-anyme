import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/sugg";
import config from "../../api/config";
import useCourse from "../../common/hooks/my/useCourse";
const MyCourse = () => {
  const { data } = useCourse();
  return (
    <ScrollView>
      {data?.map((e, i) => {
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
                <Text>{e.desc_course.substring(0, 70) + "..."}</Text>
                <Text style={styles.descTx}>
                  <Text style={{ color: "orange" }}>{e.coin}</Text> Coin .{" "}
                  {e.created_at.substring(0, 10)}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default MyCourse;
