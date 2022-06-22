import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import MaterialButtonDark from "./MaterialButtonDark";

 export function CriarConta(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.logIn}>Log in</Text>
      <TextInput placeholder="    Email" style={styles.email}></TextInput>
      <TextInput placeholder="    Senha" style={styles.email1}></TextInput>
      <MaterialButtonDark
        style={styles.materialButtonDark1}
      ></MaterialButtonDark>
      <TextInput
        placeholder="    Confirme a senha"
        style={styles.email2}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(133,169,255,1)"
  },
  logIn: {
    fontFamily: "roboto-700",
    color: "rgba(8,8,8,1)",
    height: 48,
    width: 192,
    fontSize: 32,
    textAlign: "center",
    marginTop: 68,
    alignSelf: "center"
  },
  email: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 57,
    width: 298,
    backgroundColor: "#fff",
    borderRadius: 9,
    marginTop: 48,
    marginLeft: 36
  },
  email1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 57,
    width: 298,
    backgroundColor: "#fff",
    borderRadius: 9,
    marginTop: 27,
    marginLeft: 36
  },
  materialButtonDark1: {
    height: 58,
    width: 269,
    borderRadius: 61,
    backgroundColor: "rgba(6,6,6,1)",
    marginTop: 291,
    marginLeft: 53
  },
  email2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 57,
    width: 298,
    backgroundColor: "#fff",
    borderRadius: 9,
    marginTop: -326,
    marginLeft: 36
  }
});
