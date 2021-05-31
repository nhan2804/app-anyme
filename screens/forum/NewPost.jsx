import React, { useState, useEffect } from "react";
import { View, Text, ToastAndroid } from "react-native";
import { StyleSheet, Platform, Image } from "react-native";
import { Input, Button } from "react-native-elements";
import useLogin from "../../common/hooks/useLogin";
import { useForm, Controller } from "react-hook-form";
import useNewPost from "../../common/hooks/useNewPost";
import { Header } from "react-native-elements";
import ImagePickerExample from "../../common/pickerImg/PickerImg";
import * as ImagePicker from "expo-image-picker";
import useUploadImg from "../../common/hooks/useUploadImg";
const NewPost = ({ isOpen, navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState(null);
  const [url, seturl] = useState(null);
  const [base64, setbase64] = useState(null);
  // console.log(base64?.base64);
  const { mutate: newP, isLoading } = useNewPost();
  const { mutate: newImg } = useUploadImg();
  function onView(id) {
    navigation.navigate("ViewPost", { id });
  }
  const newPost = (data) => {
    console.log("vo");
    // console.log(image.base64);

    newP(
      { ...data, url },
      {
        onSuccess: (data) => {
          onView(data.data.id);
        },
      }
    );
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "android") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
      base64: true,
    });

    // console.log(result);
    newImg(result?.base64, {
      onSuccess: (img) => {
        seturl(img);
      },
      onError: (e) => {
        console.log({ e });
      },
    });
    // setbase64(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
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
              containerStyle={{
                marginBottom: 20,
              }}
              loading={isLoading}
              title="Hỏi ngay!"
              style={{}}
              onPress={handleSubmit(newPost)}
            ></Button>

            <Button title="Chọn ảnh" onPress={pickImage} />
          </View>
          <View style={{ marginTop: 20 }}></View>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: 200 }}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    backgroundColor: "#e6e2e2",
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
    paddingHorizontal: 120,
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
