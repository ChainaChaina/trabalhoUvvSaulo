import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import MaterialButtonDark from "./MaterialButtonDark";

export function CriarPost(props) {
  return (
    <View style={styles.container}>
      <View style={styles.criarPostStackColumn}>
        <View style={styles.criarPostStack}>
          <Text style={styles.criarPost}>Criar Post</Text>
          <Text
            style={styles.textInput}
          >Voltar</Text>
        </View>
        <TextInput
        placeholder="Digite Sua critica"
        style={styles.digiteSuaCritica}
      ></TextInput>
    </View>
        <MaterialButtonDark
          style={styles.materialButtonDark1}
        ></MaterialButtonDark>
      </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(133,169,255,1)"
  },
  criarPost: {
    top: 8,
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
    color: 'white',
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    height: 25,
    width: 96,
    left: 0
  },
  criarPostStack: {
    width: 263,
    height: 56
  },
  materialButtonDark1: {
    height: 38,
    width: 269,
    borderRadius: 61,
    backgroundColor: "rgba(6,6,6,1)",
    marginTop: 372,
    marginLeft: 32
  },
  criarPostStackColumn: {
    width: 301,
    marginTop: 60,
    marginLeft: 21
  },
  digiteSuaCritica: {
    margin:'auto 0',
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "left",
    backgroundColor: "rgba(245,235,235,0.16)",
    flex: 1,
    marginBottom: -340,
  }
});
