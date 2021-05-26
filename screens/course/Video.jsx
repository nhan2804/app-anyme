import React from "react";
import { View, Text } from "react-native";
// import YoutubePlayer from "react-native-youtube-iframe";
import { WebView } from "react-native-webview";
export default function Video({ videoID }) {
  console.log(videoID);
  return (
    <View style={{ width: "100%", height: 150, aspectRatio: 16 / 9 }}>
      <WebView
        style={{ width: "100%" }}
        javaScriptEnabled={true}
        source={{
          uri: videoID || "https://www.youtube.com/embed/9uNNPVu1SI8",
        }}
      />
    </View>
  );
}
