import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import MaterialButtonDark from "./MaterialButtonDark";
import CupertinoRadio from "./CupertinoSegmentWithTwoTabs";

export function Idioma(props) {
  return (
    <View style={styles.container}>
      <View style={styles.idiomaStack}>
        <Text style={styles.idioma}>Idioma</Text>
        <TextInput
          placeholder="voltar"
          placeholderTextColor="rgba(255,255,255,1)"
          style={styles.textInput}
        ></TextInput>
      </View>
      <MaterialButtonDark
        style={styles.materialButtonDark1}
      ></MaterialButtonDark>
      <View style={styles.portuguesRow}>
        <Text style={styles.portugues}>Português</Text>
        <View style={styles.cupertinoRadio}></View>
      </View>
      <View style={styles.inglesRow}>
        <Text style={styles.ingles}>Inglês</Text>
        <View style={styles.cupertinoRadio}></View>      </View>
      <View style={styles.espanholRow}>
        <Text style={styles.espanhol}>Espanhol</Text>
        <View style={styles.cupertinoRadio}></View>      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(133,169,255,1)"
  },
  idioma: {
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
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "white",
    height: 25,
    width: 96,
    left: 0
  },
  idiomaStack: {
    width: 263,
    height: 56,
    marginTop: 60,
    marginLeft: 21
  },
  materialButtonDark1: {
    height: 38,
    width: 269,
    borderRadius: 61,
    backgroundColor: "rgba(6,6,6,1)",
    marginTop: 509,
    marginLeft: 53
  },
  portugues: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 149,
    textAlign: "justify",
    marginTop: 10
  },
  cupertinoRadio: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: 'white',
    marginLeft: 'auto',
  },
  portuguesRow: {
    height: 40,
    flexDirection: "row",
    marginTop: -524,
    marginLeft: 38,
    marginRight: 33
  },
  ingles: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 149,
    textAlign: "justify",
    marginTop: 10
  },
  cupertinoRadio1: {
    height: 40,
    width: 40,
    marginLeft: 115
  },
  inglesRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 38,
    marginRight: 33
  },
  espanhol: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 149,
    textAlign: "justify",
    marginTop: 10
  },
  cupertinoRadio2: {
    height: 40,
    width: 40,
    marginLeft: 115
  },
  espanholRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 38,
    marginRight: 33
  }
});
