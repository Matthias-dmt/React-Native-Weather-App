import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ImageBackground,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [value, setValue] = React.useState("Search...");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/cold-bg.jpg")}
        style={styles.bgImage}
      >
        <TextInput
          style={styles.searchBar}
          onChangeText={(text) => setValue(text)}
          value={value}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
  },

  bgImage: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },

  searchBar: {
    width: windowWidth * 0.9,
    paddingVertical: 8.5,
    paddingLeft: 5,
    marginTop: windowHeight * 0.06,
    borderStyle: "solid",
    borderRadius: 5,
    backgroundColor: "#eeeeee",
  },
});
