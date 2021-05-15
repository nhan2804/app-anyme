import React from "react";
import { View, Text } from "react-native";
import Modal from "react-native-modal";
import { Textarea, Form, Button } from "native-base";
// import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import ImagePicker from "react-native-image-picker";

export default function NewPost() {
  const options = {
    title: "Select Avatar",
    customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
    storageOptions: {
      skipBackup: true,
      path: "images",
    },
  };
  const handleChooseImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        console.log(source);
      }
    });
  };
  return (
    <View>
      <Modal isVisible={true}>
        <View style={{ flex: 1 }}>
          <Text>sHmm! Bạn đang gặp bugs gì không?</Text>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Textarea" />
          </Form>

          <Button>
            <Text onPress={handleChooseImage}>Click Me!</Text>
          </Button>
        </View>
      </Modal>
    </View>
  );
}
