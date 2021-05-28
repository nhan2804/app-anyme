import React from "react";
import { View, Text } from "react-native";
import useBlogs from "../../common/hooks/my/useBlog";
import ItemBlog from "../../components/blog/ItemBlog";

export default function MyBlog() {
  const { data } = useBlogs();

  return (
    <View>
      {data?.map((e, i) => {
        return <ItemBlog key={e.id_blog} item={e} />;
      })}
    </View>
  );
}
