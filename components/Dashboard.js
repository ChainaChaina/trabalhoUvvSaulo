import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text  onPress={() => navigation.navigate('User')} style={styles.usuario}>Usuário</Text>
      <Text style={styles.criarNovaConta1}>20 tarefas incompletas</Text>
      <Text style={styles.criarNovaConta2}>10 tarefas novas</Text>
      <View style={styles.rect}>
        <TextInput
          placeholder="código de convite"
          style={styles.placeholder}
        ></TextInput>
      </View>
      <Text style={styles.tarefasDeCasa}>Tarefas de casa</Text>
      <Text style={styles.criarNovaConta3}>3 incompletas</Text>
      <Text style={styles.trabalhosEscolares}>Trabalhos escolares</Text>
      <Text style={styles.completa}>Completa</Text>
      <Text style={styles.compras}>Compras</Text>
      <Text style={styles.completa1}>1 incompleta</Text>
      <View    style={styles.ellipseStack}>
        <Text onPress={() => navigation.navigate('Novalista')} style={styles.ellipseStackIcon} > + </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  usuario: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 28,
    marginTop: 83,
    marginLeft: 31
  },
  criarNovaConta1: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    fontSize: 19,
    marginTop: 48,
    marginLeft: 152
  },
  criarNovaConta2: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    fontSize: 19,
    marginTop: 14,
    marginLeft: 152
  },
  rect: {
    width: 251,
    height: 56,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 80,
    alignSelf: "center"
  },
  placeholder: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    height: 52,
    width: 243,
    fontSize: 20,
    textAlign: "center",
    marginTop: 2,
    marginLeft: 6
  },
  tarefasDeCasa: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 28,
    marginTop: 63,
    marginLeft: 31
  },
  criarNovaConta3: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    fontSize: 19,
    marginLeft: 41
  },
  trabalhosEscolares: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 28,
    marginTop: 15,
    marginLeft: 31
  },
  completa: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    fontSize: 19,
    marginLeft: 41
  },
  compras: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 28,
    marginTop: 16,
    marginLeft: 31
  },
  completa1: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    fontSize: 19,
    marginLeft: 41
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 54,
    height: 56,
    position: "absolute"
  },
  icon: {
    top: 5,
    left: 15,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  ellipseStack: {
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: '#0094FF',
    width: 54,
    height: 56,
    marginTop: 58,
    marginLeft: 271
  },
  ellipseStackIcon:{
    fontSize:37,
    color: 'white',
  }
});

export default Dashboard;
