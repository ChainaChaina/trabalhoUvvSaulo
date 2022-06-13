import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Tarefa(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.tarefasDeCasa}>Tarefas de casa</Text>
      <Text style={styles.tirarOLixo}>Tirar o lixo</Text>
      <View style={styles.criadoEmRow}>
        <Text style={styles.criadoEm}>Criado em:</Text>
        <Text style={styles.criadoEm1}>20/05/2022</Text>
      </View>
      <View style={styles.porRow}>
        <Text style={styles.por}>por:</Text>
        <Text style={styles.lucas}>Lucas</Text>
      </View>
      <View style={styles.por1Row}>
        <Text style={styles.por1}>por:</Text>
        <Text style={styles.audalio}>Audálio</Text>
      </View>
      <View style={styles.executadaEmRow}>
        <Text style={styles.executadaEm}>Executada em:</Text>
        <Text style={styles.criadoEm2}>20/05/2022</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tarefasDeCasa: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 28,
    marginTop: 102,
    alignSelf: "center"
  },
  tirarOLixo: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 35,
    marginTop: 54,
    alignSelf: "center"
  },
  criadoEm: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24
  },
  criadoEm1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    marginLeft: 40,
    marginTop: 1
  },
  criadoEmRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 82,
    marginLeft: 54,
    marginRight: 36
  },
  por: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24
  },
  lucas: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    marginLeft: 114
  },
  porRow: {
    height: 29,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 90,
    marginRight: 64
  },
  por1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24
  },
  audalio: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    marginLeft: 118
  },
  por1Row: {
    height: 29,
    flexDirection: "row",
    marginTop: 121,
    marginLeft: 81,
    marginRight: 51
  },
  executadaEm: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24
  },
  criadoEm2: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    marginLeft: 17,
    marginTop: 1
  },
  executadaEmRow: {
    height: 30,
    flexDirection: "row",
    marginTop: -62,
    marginLeft: 31,
    marginRight: 41
  }
});

export default Tarefa;
