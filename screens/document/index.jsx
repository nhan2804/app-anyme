import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import useDocument from "../../common/hooks/useDocument";
import useGetDocument from "../../common/hooks/useGetDocument";
import styles from "../../styles/docu";
const Document = () => {
  const { data: cates } = useDocument();
  const [cate, setcate] = useState(cates?.[0]);
  const { data: docs } = useGetDocument(cate?.id_cate);
  console.log(docs);
  return (
    <ScrollView style={styles.container}>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "Tài liệu", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      <View style={styles.headV}>
        <Text style={styles.Cate}>DANH MỤC TÀI LIỆU</Text>
        <View style={styles.headC}>
          {cates?.map((e, i) => {
            return (
              <TouchableOpacity
                onPress={() => setcate(e)}
                key={e.id_cate}
                style={[
                  styles.itemCate,
                  e.id_cate == cate?.id_cate ? styles.active : {},
                ]}
              >
                <Text style={styles.Tx}>{e.name_cate}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <Text style={styles.Cate}>{cate?.name_cate}</Text>
      {/* map docu */}
      {docs?.map((e, i) => {
        return (
          <View key={e.id_doc} style={styles.botItem}>
            <View style={styles.bHead}>
              <View style={styles.imgV}>
                <Text style={{ fontSize: 26, color: "#6fa7e8" }}>
                  File . {e.file_doc.split(".").slice(-1)[0]}
                </Text>
              </View>
              <View>
                <Text style={styles.title}>{e.name_doc}</Text>
                <Text>{e.created_at}</Text>
              </View>
              <View>
                <Icon name="dots-vertical" size={30}></Icon>
              </View>
            </View>
            <View style={styles.desc}>
              <Text style={styles.Txdes}>{e.desc_doc.substring(0, 10)}</Text>
            </View>
            {/* <View style={styles.botb}>
              <TouchableOpacity style={styles.btnL}>
                <Text style={styles.Txbtn}>Xem chi tiết</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnR}>
                <Text style={styles.Txbtn}>Tải xuống</Text>
              </TouchableOpacity>
            </View> */}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Document;
