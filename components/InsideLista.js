import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function InsideLista({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.tarefasDeCasa}>Tarefas de Casa</Text> 
      <View style={styles.equipeRow}>
        <Text  onPress={() => navigation.navigate('Equipe')} style={styles.equipe}>Equipe</Text>
        <View style={styles.ellipseStack}>
          <Text style={styles.loremIpsum}>3</Text>
        </View>
        <MaterialIconsIcon
          name="filter-list"
          style={styles.icon}
        ></MaterialIconsIcon>
      </View>
      <View  style={styles.tirarOLixoColumnRow}>
        <View  style={styles.tirarOLixoColumn}>
          <Text  onPress={() => navigation.navigate('Tarefa')}  style={styles.tirarOLixo}>Tirar o lixo</Text>
          <Text style={styles.feitoPorLucas}>feito por Lucas</Text>
        </View>
        <View style={styles.rectStack}>
          <View style={styles.rect}></View>
          <EntypoIcon name="check" style={styles.icon2}></EntypoIcon>
          <Text style={styles.nv2}>nv:2</Text>
        </View>
      </View>
      <View style={styles.pagarAsContasRow}>
        <Text style={styles.pagarAsContas}>Pagar as Contas</Text>
        <View style={styles.rect1}></View>
      </View>
      <View style={styles.varrerACasaColumnRow}>
        <View style={styles.varrerACasaColumn}>
          <Text style={styles.varrerACasa}>Varrer a Casa</Text>
          <Text style={styles.prazo13022022}>prazo: 13/02/2022</Text>
        </View>
        <View style={styles.rect2}></View>
      </View>
      <View style={styles.comprarRacaoColumnRow}>
        <View style={styles.comprarRacaoColumn}>
          <Text onPress={() => navigation.navigate('ListaFeita')}  style={styles.comprarRacao}>Comprar Ração</Text>
          <View style={styles.prazo130220223Row}>
            <Text style={styles.prazo130220223}>prazo:</Text>
            <Text style={styles.prazo130220224}>13/02/2022</Text>
          </View>
        </View>
        <View style={styles.rect3Column}>
          <View style={styles.rect3}></View>
          <Text style={styles.nv5}>nv:5</Text>
        </View>
      </View>
      <View    style={styles.ellipseStack1}>
        <Text style={styles.ellipseStackIcon1} > + </Text>
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
  equipe: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    marginTop: 7
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 24,
    height: 29,
    position: "absolute"
  },
  loremIpsum: {
    top: 6,
    left: 8,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  ellipseStack: {
    width: 24,
    height: 29,
    marginLeft: 17,
    marginTop: 7
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 131
  },
  equipeRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 66,
    marginLeft: 53,
    marginRight: 37
  },
  tirarOLixo: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    textDecorationLine: "line-through"
  },
  feitoPorLucas: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    fontSize: 19
  },
  tirarOLixoColumn: {
    width: 127,
    marginBottom: 4
  },
  rect: {
    top: 0,
    left: 0,
    width: 40,
    height: 41,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 10
  },
  icon2: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(74,144,226,1)",
    fontSize: 40
  },
  nv2: {
    top: 39,
    left: 7,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)"
  },
  rectStack: {
    width: 40,
    height: 56,
    marginLeft: 120
  },
  tirarOLixoColumnRow: {
    height: 56,
    flexDirection: "row",
    marginTop: 51,
    marginLeft: 51,
    marginRight: 37
  },
  pagarAsContas: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24
  },
  rect1: {
    width: 40,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginLeft: 70
  },
  pagarAsContasRow: {
    height: 41,
    flexDirection: "row",
    marginTop: 43,
    marginLeft: 51,
    marginRight: 37
  },
  varrerACasa: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24
  },
  prazo13022022: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    fontSize: 19,
    marginLeft: 2
  },
  varrerACasaColumn: {
    width: 161,
    marginTop: 6
  },
  rect2: {
    width: 40,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginLeft: 87
  },
  varrerACasaColumnRow: {
    height: 58,
    flexDirection: "row",
    marginTop: 48,
    marginLeft: 51,
    marginRight: 36
  },
  comprarRacao: {
    fontFamily: "roboto-700",
    color: "rgba(208,2,27,1)",
    fontSize: 24
  },
  prazo130220223: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    fontSize: 19
  },
  prazo130220224: {
    fontFamily: "roboto-700",
    color: "rgba(208,2,27,1)",
    fontSize: 19,
    marginLeft: 7
  },
  prazo130220223Row: {
    height: 23,
    flexDirection: "row",
    marginRight: 6
  },
  comprarRacaoColumn: {
    width: 167,
    marginBottom: 8
  },
  rect3: {
    width: 40,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 10
  },
  nv5: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    marginTop: 2,
    marginLeft: 7
  },
  rect3Column: {
    width: 40,
    marginLeft: 80
  },
  comprarRacaoColumnRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 51,
    marginRight: 37
  },
  icon3: {
    top: 5,
    left: 15,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  ellipse1: {
    top: 0,
    left: 0,
    width: 54,
    height: 56,
    position: "absolute"
  },
  icon4: {
    top: 5,
    left: 15,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon3Stack: {
    width: 54,
    height: 56,
    marginTop: 55,
    marginLeft: 168
  },
  ellipseStack1: {
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: '#0094FF',
    width: 54,
    height: 56,
    marginTop: 58,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ellipseStackIcon1:{
    fontSize:37,
    color: 'white',
  },
});

export default InsideLista;
