import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, TextInput } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Novalista({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Nova Lista</Text>
      <Text style={styles.criarNovaConta1}>Configure a Nova Lista</Text>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <View style={styles.rect3}></View>
        </View>
        <TextInput placeholder="Nome" style={styles.placeholder1}></TextInput>
        <TextInput placeholder="Nome" style={styles.placeholder2}></TextInput>
      </View>
      <View style={styles.rect2}>
        <TextInput
          placeholder="Nome do Item"
          style={styles.placeholder4}
        ></TextInput>
        <View style={styles.rect4}>
          <View style={styles.rect5}></View>
        </View>
        <TextInput
          placeholder="dd/mm/yyyy"
          style={styles.placeholder5}
        ></TextInput>
        <View style={styles.rect6}></View>
        <TextInput
          placeholder="Nível de prioridade"
          style={styles.placeholder6}
        ></TextInput>
        <View style={styles.rect7}></View>
      </View>
      <View    style={styles.ellipseStack}>
        <Text style={styles.ellipseStackIcon} > + </Text>
      </View>

      <Text  onPress={() => navigation.navigate('InsideLista')} style={styles.create}>Criar</Text>

    </ScrollView>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow:"scroll"
  },
  create:{
    fontFamily: "roboto-700",
    fontSize: 30,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ellipseStack: {
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: '#0094FF',
    width: 54,
    height: 56,
    marginTop: 58,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ellipseStackIcon:{
    fontSize:37,
    color: 'white',
  },
  text: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 28,
    marginTop: 97,
    alignSelf: "center"
  },
  criarNovaConta1: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    fontSize: 19,
    marginTop: 17,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  rect1: {
    top: 42,
    left: 0,
    width: 313,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)"
  },
  rect3: {
    width: 313,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  placeholder1: {
    top: 0,
    left: 7,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 43,
    width: 262,
    fontSize: 28,
    textAlign: "left"
  },
  placeholder2: {
    top: 0,
    left: 7,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 43,
    width: 262,
    fontSize: 28,
    textAlign: "left"
  },
  rect1Stack: {
    width: 313,
    height: 43,
    marginTop: 75,
    marginLeft: 32
  },
  rect2: {
    width: 313,
    height: 234,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 19,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.17,
    shadowRadius: 0,
    marginTop: 59,
    marginLeft: 32
  },
  placeholder4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 217,
    fontSize: 23,
    textAlign: "left",
    marginTop: 23,
    marginLeft: 33
  },
  rect4: {
    width: 259,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 3,
    marginLeft: 26
  },
  rect5: {
    width: 259,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  placeholder5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 217,
    fontSize: 23,
    textAlign: "left",
    marginTop: 42,
    marginLeft: 33
  },
  rect6: {
    width: 259,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 2,
    marginLeft: 26
  },
  placeholder6: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 217,
    fontSize: 23,
    textAlign: "left",
    marginTop: 38,
    marginLeft: 33
  },
  rect7: {
    width: 259,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 2,
    marginLeft: 26
  },
  icon1: {
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
  icon2: {
    top: 5,
    left: 15,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon1Stack: {
    width: 54,
    height: 56,
    marginTop: 102,
    marginLeft: 271
  }
});

export default Novalista;
