import React from "react";
import { View, Text } from "react-native";
// import YoutubePlayer from "react-native-youtube-iframe";
import { WebView } from "react-native-webview";
export default function Video({ videoID }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <WebView
        originWhitelist={["*"]}
        source={{ uri: "https://reactnative.dev/" }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        style={{ marginTop: 20 }}
        startInLoadingState={true}
      />
    </View>
  );
}
