import React from "react";
import { View, Text } from "react-native";
import Modal from "react-native-modal";
import { Textarea, Form, Button } from "native-base";
export default function NewPost() {
  return (
    <View>
      <Modal isVisible={true}>
        <View style={{ flex: 1 }}>
          <Text>Hmm! Bạn đang gặp bugs gì không?</Text>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Textarea" />
          </Form>

          <Button>
            <Text>Click Me!</Text>
          </Button>
        </View>
      </Modal>
    </View>
  );
}
