import React from "react";
import { Text, View, ScrollView } from "react-native";
import useBlogs from "../../common/hooks/useBlog";
import ItemBlog from "../../components/blog/ItemBlog";
import { Container, Header, Left, Body, Right, Title } from "native-base";
function Blog(props) {
  const data = useBlogs();
  const onView = (id) => {
    props.navigation.navigate("DetailBlog", {
      id,
    });
  };
  return (
    <Container>
      <View>
        <ScrollView>
          {/* <FlatList
          keyExtractor={(item) => item.id_blog.toString()}
          data={data?.data?.data?.datas}
          renderItem={ItemBlog}
        /> */}
          {data?.data?.data?.datas.map((e, i) => {
            return (
              <ItemBlog onView={onView} key={e.id_blog} item={e}></ItemBlog>
            );
          })}
        </ScrollView>
      </View>
    </Container>
  );
}

export default Blog;
