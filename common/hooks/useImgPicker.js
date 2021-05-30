import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import useImgBB from "./useImgBB";

export default function useImagePicker() {
  const [image, setImage] = useState(null);
  const [url, seturl] = useState(null);
  const { mutate: onUpload } = useImgBB();
  const [base, setbase] = useState(null);
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
      //   aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    setbase(result.base64);

    onUpload(result.base64, {
      onSuccess: (img) => {
        seturl(img);
      },
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return [image, setImage, base, pickImage, url];
}
