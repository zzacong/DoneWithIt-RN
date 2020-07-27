// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  // Text,
  // TouchableWithoutFeedback,
  // TouchableOpacity,
  // TouchableHighlight,
  // TouchableNativeFeedback,
  View,
  // Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  // const handlePress = () => console.log("Text pressed");

  return (
    // <SafeAreaView style={styles.container}>
    //   {/* <Text numberOfLines={1} onPress={() => console.log("Text pressed 1")}> */}
    //   {/* <Text numberOfLines={1} onPress={handlePress}> */}
    //   <Text>Hello React Native</Text>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   <TouchableHighlight onPress={() => console.log("Image tapped")}>
    //     {/* <Image source={require("./assets/icon.png")} /> */}
    //     <Image
    //       blurRadius={2}
    //       // fadeDuration={1000}
    //       style={styles.logo}
    //       source={{ width: 200, height: 200, uri: "https://picsum.photos/200" }}
    //     />
    //   </TouchableHighlight>
    //   <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
    //     <View
    //       style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
    //     ></View>
    //   </TouchableNativeFeedback>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
    // <SafeAreaView style={[styles.container, containerStyle]}>
    //   <Button
    //     color="dimgrey"
    //     title="Click Me"
    //     // onPress={() =>
    //     //   Alert.alert("My title", "My message", [
    //     //     { text: "Yes", onPress: () => console.log("Yes") },
    //     //     { text: "No", onPress: () => console.log("No") },
    //     //   ])
    //     // }
    //     onPress={() =>
    //       Alert.prompt("My title", "My message", (text) => console.log(text))
    //     }
    //   />
    //   <StatusBar style="auto" />
    // </SafeAreaView>
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          // width: 150,
          width: "50%",
          height: 70,
        }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: Platform.OS === "android" ? 20 : 0,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

const containerStyle = { backgroundColor: "orange" };
