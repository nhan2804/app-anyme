import React, { useState } from "react";
import { View, Text, ToastAndroid } from "react-native";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";
import useLogin from "../../common/hooks/useLogin";
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Login({ setauth }) {
  const { mutate: onLogin } = useLogin();
  const [error, seterror] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("auth");
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("auth", "true");
      setauth(true);
      console.log("save success");
    } catch (error) {
      // Error saving data
      console.log({ error });
    }
  };
  const login = (data) => {
    onLogin(data, {
      onSuccess: (data) => {
        storeData();
      },
      onError: (e) => {
        seterror(e.response.data.message);
        ToastAndroid.show(e.response.data.message, ToastAndroid.SHORT);
      },
    });
    console.log(error);
    console.log(data);
  };
  return (
    <View style={styles.viewStyles}>
      <Text style={styles.textStyles}>RinNovel</Text>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Username"
            leftIcon={{ type: "font-awesome", name: "user-circle" }}
            style={styles.white}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="username"
        rules={{ required: true }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Password"
            leftIcon={{ type: "font-awesome", name: "user-circle" }}
            style={styles.white}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />
      <View style={styles.center}>
        <Button
          title="Đăng nhập"
          style={styles.color}
          onPress={handleSubmit(login)}
        ></Button>
        {<Text style={styles.red}>{error}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f02193",
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
