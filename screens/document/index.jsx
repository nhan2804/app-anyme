import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import useDocument from "../../common/hooks/useDocument";
import useGetDocument from "../../common/hooks/useGetDocument";
import styles from "../../styles/docu";
const Document = () => {
  const { data: cates } = useDocument();
  const [cate, setcate] = useState(cates?.[0]);
  const { data: docs } = useGetDocument(cate?.id_cate);

  return (
    <ScrollView style={styles.container}>
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
                <Image
                  source={{
                    uri: "https://findicons.com/files/icons/1579/devine/256/file.png",
                  }}
                  style={styles.wh100}
                />
              </View>
              <Text style={styles.title}>{e.name_doc}</Text>
            </View>
            <View style={styles.desc}>
              <Text style={styles.Txdes}>
                {e.desc_doc.substring(0, 120) + "..."}
              </Text>
            </View>
            <View style={styles.botb}>
              <TouchableOpacity style={styles.btnL}>
                <Text style={styles.Txbtn}>Xem chi tiết</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnR}>
                <Text style={styles.Txbtn}>Tải xuống</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Document;
