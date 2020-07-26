import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  // TouchableWithoutFeedback,
  // TouchableOpacity,
  // TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Image,
  SafeAreaView,
} from "react-native";

export default function App() {
  // const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text numberOfLines={1} onPress={() => console.log("Text pressed 1")}> */}
      {/* <Text numberOfLines={1} onPress={handlePress}> */}
      <Text>Hello React Native</Text>
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        {/* <Image source={require("./assets/icon.png")} /> */}
        <Image
          // blurRadius={10}
          // fadeDuration={1000}
          style={styles.logo}
          source={{ width: 200, height: 200, uri: "https://picsum.photos/200" }}
        />
      </TouchableHighlight>
      <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
        <View
          style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
