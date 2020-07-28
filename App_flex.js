import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", //row, row-reverse, column, column-reverse
        justifyContent: "center", //flex-start, flex-end, center, space-around, space-evenly, space-between
        alignItems: "center", //baseline, stretch
        // alignContent: "center",
        // flexWrap: "wrap",
      }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          // flex: 1,
          // flexBasis: 100, // can map to width or height depen on primary axis
          // flexGrow: 1,
          // flexShrink: 1,
          width: 100,
          height: 100,
          // alignSelf: "flex-start",
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          // flex: 2,
          width: 100,
          height: 100,
          top: 20,
          left: 20,
          position: "relative", //absolute, relative
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          // flex: 1,
          width: 100,
          height: 100,
        }}
      />
      {/* <View
        style={{
          backgroundColor: "grey",
          // flex: 1,
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "greenyellow",
          // flex: 1,
          width: 100,
          height: 100,
        }}
      /> */}
    </View>
  );
}
