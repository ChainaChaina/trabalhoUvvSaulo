import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Convite(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.listaCriada}>Lista criada</Text>
      <Text style={styles.criarNovaConta1}>Lista criada com sucesso</Text>
      <Text style={styles.tarefasDeCasa}>Tarefas de Casa</Text>
      <Text style={styles.xh9293}>XH9 - 293</Text>
      <Text style={styles.criarNovaConta2}>
        Você pode convidar {"\n"}participantes com esse {"\n"}código.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listaCriada: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 28,
    marginTop: 158,
    alignSelf: "center"
  },
  criarNovaConta1: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    fontSize: 19,
    marginTop: 17,
    marginLeft: 91
  },
  tarefasDeCasa: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 28,
    marginTop: 89,
    alignSelf: "center"
  },
  xh9293: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 35,
    marginTop: 76,
    alignSelf: "center"
  },
  criarNovaConta2: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    fontSize: 19,
    textAlign: "center",
    marginTop: 80,
    marginLeft: 79
  }
});

export default Convite;
