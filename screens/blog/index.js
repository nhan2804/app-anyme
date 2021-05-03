import React from "react";
import PropTypes from "prop-types";
import { Text, View, ScrollView } from "react-native";
import useBlogs from "../../common/hooks/useBlog";
import { FlatList } from "react-native-gesture-handler";
import ItemBlog from "../../components/blog/ItemBlog";
function Blog(props) {
  const data = useBlogs();
  console.log(data?.data?.data?.datas);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView>
        {/* <FlatList
          keyExtractor={(item) => item.id_blog.toString()}
          data={data?.data?.data?.datas}
          renderItem={ItemBlog}
        /> */}
        {data?.data?.data?.datas.map((e, i) => {
          return <ItemBlog key={e.id_blog} item={e}></ItemBlog>;
        })}
      </ScrollView>
    </View>
  );
}

Blog.propTypes = {};

export default Blog;
