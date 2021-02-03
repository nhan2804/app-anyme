import React from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
} from "react-native";
import styles from "../../styles/forum";
function ListPost(props) {
  const { posts } = props;
  const { onView } = props;
  const handleView = (id) => {
    onView(id);
  };
  return (
    <View>
      {posts.map((e, i) => {
        return (
          <View style={styles.items} key={e.id_post} onPress>
            <Text>{e.title_post}</Text>
            <Button title="Xem" onPress={() => handleView(e.id_post)}></Button>
            {/* <Image style={{width: 40, height: 40}} source={{uri:e.download_url}}></Image> */}
          </View>
        );
      })}
    </View>
  );
}

export default ListPost;
