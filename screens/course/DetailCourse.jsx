import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Picker,
} from "react-native";
// import { Icon } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
import styles from "../../styles/course";
import useDetailCourse from "../../common/hooks/useDetailCourse";
import config from "../../api/config";
import useBuyCourse from "../../common/hooks/useBuyCourse";
import Video from "./Video";

const DetailCourse = ({ route }) => {
  const { id } = route.params;
  const { data } = useDetailCourse(id);

  const { mutate: onBuy } = useBuyCourse();
  const [video, setvideo] = useState("");
  const buy = (id) => {
    onBuy(id, {
      onError: (e) => {
        console.log({ e });
      },
    });
  };
  const getIdVideo = (url) => {
    let regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: config.resource + data?.course_detail?.img_course,
          }}
        />
      </View>
      <View style={styles.center}>
        <View style={styles.inCenter}>
          <Text style={styles.title}>{data?.course_detail?.title_course}</Text>
          <View style={styles.test}>
            <Text style={styles.date}>
              {data?.course_detail?.created_at.substring(0, 10)} .
              {data?.course_detail?.total_study} học viên
            </Text>
            <View style={styles.Vbtn}>
              {data?.bought && (
                <View style={styles.btnL}>
                  <Icon
                    color="#3f5664"
                    name="check-underline-circle"
                    reverse
                    size={20}
                    type="material"
                  />
                  <Text style={{ color: "#ddd", textAlign: "center" }}>
                    Đã mua
                  </Text>
                </View>
              )}
              {!data?.bought && (
                <TouchableOpacity
                  style={styles.btnL}
                  onPress={() => buy(data?.course_detail?.id_course)}
                >
                  <View>
                    <Icon
                      color="#3f5664"
                      name="cart-arrow-down"
                      reverse
                      size={20}
                      type="material"
                    />
                    <Text style={{ color: "#ddd", textAlign: "center" }}>
                      Mua
                    </Text>
                  </View>
                </TouchableOpacity>
              )}

              <View style={styles.btnC}>
                <Icon
                  color="#3f5664"
                  name="vote"
                  reverse
                  size={20}
                  type="material"
                />
                <Text style={{ color: "#ddd", textAlign: "center" }}>
                  Đánh giá
                </Text>
              </View>
              <View style={styles.btnR}>
                <Icon
                  color="#3f5664"
                  name="share"
                  reverse
                  size={20}
                  type="material"
                />
                <Text style={{ color: "#ddd", textAlign: "center" }}>
                  Chia sẻ
                </Text>
              </View>
              <TouchableOpacity style={styles.touch}>
                <Text style={styles.khhTx}>Xem các khóa học tương tự</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.Txb}>Bạn sẽ học được gì</Text>

            <Text style={styles.hocTx}>{data?.course_detail?.desc_course}</Text>
            <Video videoID={video} />
            {/* <Text style={styles.yc}>Yêu cầu</Text> */}
          </View>
        </View>
      </View>
      <View style={styles.bot}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity style={styles.btt}>
            <Text style={styles.Txbtt}>Bài học</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btt}>
            <Text style={styles.Txbtt}>Đánh giá</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.inBot}>
          {data?.bought &&
            data?.lessons.map((e, i) => {
              return (
                <TouchableOpacity
                  onPress={() => setvideo(getIdVideo(e.url_lession))}
                >
                  <View style={styles.item}>
                    <View style={styles.inL}>{/* thumnail */}</View>
                    <Text style={styles.inC}>{e.title_lesson}</Text>
                    <View style={styles.inR}>
                      <Icon
                        color="#ddd"
                        name="more-vert"
                        size={20}
                        type="material"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default DetailCourse;
