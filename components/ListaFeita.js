import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ListaFeita(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.tarefasDeCasa1}>Tarefas de casa</Text>
      <Text style={styles.listaConcluida}>Lista {"\n"}Concluída!</Text>
      <Text style={styles.criarNovaConta1}>
        Todas as tarefas foram finalizadas!
      </Text>
      <Text style={styles.duracaoDe13Dias}>Duração de 13 dias</Text>
      <Text style={styles.equipeDe4Pessoas}>Equipe de 4 pessoas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tarefasDeCasa1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 28,
    marginTop: 102,
    alignSelf: "center"
  },
  listaConcluida: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 35,
    textAlign: "center",
    marginTop: 54,
    alignSelf: "center"
  },
  criarNovaConta1: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    fontSize: 19,
    marginTop: 36,
    marginLeft: 49
  },
  duracaoDe13Dias: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    fontSize: 19,
    marginTop: 82,
    marginLeft: 107
  },
  equipeDe4Pessoas: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    fontSize: 19,
    marginTop: 69,
    marginLeft: 107
  }
});

export default ListaFeita;
