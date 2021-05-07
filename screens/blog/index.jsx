import React from "react";
import { Text, View, ScrollView } from "react-native";
import useBlogs from "../../common/hooks/useBlog";
import ItemBlog from "../../components/blog/ItemBlog";
import { Container, Header, Left, Body, Right, Title } from "native-base";
function Blog(props) {
  const data = useBlogs();
  console.log(data?.data?.data?.datas);
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Chia sẻ</Title>
        </Body>
        <Right />
      </Header>
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
    </Container>
  );
}

Blog.propTypes = {};

export default Blog;
