import React, { useState } from "react";
import { View, Text, ToastAndroid } from "react-native";
import { StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import useLogin from "../../common/hooks/useLogin";
import { useForm, Controller } from "react-hook-form";
import useNewPost from "../../common/hooks/useNewPost";
import { Header } from "react-native-elements";
const NewPost = ({ isOpen, navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate: newP, isLoading } = useNewPost();
  function onView(id) {
    navigation.navigate("ViewPost", { id });
  }
  const newPost = (data) => {
    console.log(data);
    newP(data, {
      onSuccess: (data) => {
        onView(data.data.id);
      },
    });
  };

  return (
    <View>
      <Header
        leftComponent={{ icon: "home", color: "#fff" }}
        centerComponent={{ text: "Chi tiết", style: { color: "#fff" } }}
      />

      <View style={styles.container}>
        <View style={styles.viewStyles}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Title"
                style={styles.white}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="title"
            rules={{ required: true }}
            defaultValue=""
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Nội dung"
                style={styles.white}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="content"
            rules={{ required: true }}
            defaultValue=""
          />

          <View style={styles.center}>
            <Button
              loading={isLoading}
              title="Hỏi ngay!"
              style={styles.color}
              onPress={handleSubmit(newPost)}
            ></Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#e8e5de",
    width: "100%",
    height: "100%",
  },
  red: {
    color: "red",
  },
  white: {
    color: "#ffffff",
  },
  center: {
    textAlign: "center",
  },
  color: {
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  textStyles: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
export default NewPost;
