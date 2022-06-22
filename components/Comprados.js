import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";
import CupertinoSearchBarBasic from "./CupertinoSegmentWithTwoTabs";

export function Comprados(props) {
  return (
    <View style={styles.container}>
      <View style={styles.compradosStack}>
        <Text style={styles.comprados}>Comprados</Text>
        <TextInput
          placeholder="voltar"
          placeholderTextColor="rgba(255,255,255,1)"
          style={styles.textInput}
        ></TextInput>
      </View>
      <View style={styles.rect}>
        <CupertinoSearchBarBasic
          style={styles.cupertinoSearchBarBasic}
        ></CupertinoSearchBarBasic>
        <Image
          source={require("../assets/images/move.jpg")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <Image
          source={require("../assets/images/move.jpg")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(133,169,255,1)"
  },
  comprados: {
    top: 21,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 48,
    width: 192,
    fontSize: 32,
    textAlign: "center",
    left: 71
  },
  textInput: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 25,
    width: 96,
    left: 0
  },
  compradosStack: {
    width: 263,
    height: 69,
    marginTop: 60,
    marginLeft: 21
  },
  rect: {
    width: 375,
    height: 1120,
    backgroundColor: "#E6E6E6",
    marginTop: 15
  },
  cupertinoSearchBarBasic: {
    height: 39,
    width: 332,
    backgroundColor: "rgba(230, 230, 230,0)",
    marginTop: 15,
    marginLeft: 21
  },
  image1: {
    width: 318,
    height: 192,
    borderRadius: 33,
    marginTop: 16,
    marginLeft: 28
  },
  image2: {
    width: 318,
    height: 192,
    borderRadius: 33,
    marginTop: 13,
    marginLeft: 28
  }
});
