import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";

function MaterialButtonDark(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <TextInput
        placeholder="Tudo certo!"
        placeholderTextColor="rgba(230, 230, 230,1)"
        style={styles.textInput}
      ></TextInput>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  textInput: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    textAlign: "center",
    lineHeight: 20,
    width: 191,
    height: 20
  }
});

export default MaterialButtonDark;
