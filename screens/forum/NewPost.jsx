import React, { useState } from "react";
import { View, Text, ToastAndroid } from "react-native";
import { StyleSheet } from "react-native";
import RNPickerSelect from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";
import useLogin from "../../common/hooks/useLogin";
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useNewPost from "../../common/hooks/useNewPost";
const NewPost = ({ isOpen, navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate: newP } = useNewPost();
  function onView(id) {
    navigation.navigate("ViewPost", { id });
  }
  const newPost = (data) => {
    console.log(data);
    newP(data, {
      onSuccess: (data) => {
        console.log(data.data.id);
        onView(data.data.id);
      },
    });
  };

  return (
    <View>
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>Yukino</Text>
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
            title="Hỏi ngay!"
            style={styles.color}
            onPress={handleSubmit(newPost)}
          ></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fabc36",
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
});
export default NewPost;
