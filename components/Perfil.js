import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import CupertinoSegmentWithTwoTabs from "./CupertinoSegmentWithTwoTabs";

export function Perfil({ route, navigation  }) {


  function Navigate(local){
    navigation.navigate(local)
  }

  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
        <View style={styles.photo} ></View>
          <Text style={styles.userName}>{route.params.Login}</Text>
          <CupertinoSegmentWithTwoTabs
            style={styles.cupertinoSegmentWithTwoTabs}
          ></CupertinoSegmentWithTwoTabs>
          <View style={styles.imageRow}>
          <TouchableOpacity onPress={() => Navigate('CriarPost')}>
            <Image
              source={require("../assets/images/filme.webp")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            </TouchableOpacity>
            <Image
              source={require("../assets/images/fiulme.jpg")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
          </View>
        </View>
       
      </View>
      <View style={styles.perfilStack}>
        <Text style={styles.perfil}>Perfil</Text>
        <Text
          style={styles.textInput}
          onPress={() => Navigate('Idioma')}
        > Configurações</Text>
       <Text
          style={styles.textInput1}
          onPress={() => Navigate('Biblioteca')}
        > Biblioteca</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(133,169,255,1)"
  },
  photo:{
    maxWidth:150,
    minHeight: 150,
    borderRadius: 500,
    backgroundColor:'#C4C4C4',
    marginTop: -120,
    marginLeft: 110,
    },
  rect: {
    top: 130,
    left: 0,
    width: 386,
    height: 553,
    position: "absolute",
    backgroundColor: "rgba(204,203,203,1)"
  },
  userName: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 41,
    width: 250,
    fontSize: 32,
    textAlign: "center",
    marginTop: 15,
    marginLeft: 63
  },
  cupertinoSegmentWithTwoTabs: {
    height: 49,
    width: 355,
    backgroundColor: "rgba(84,32,32,0)",
    marginTop: 25,
    marginLeft: 10
  },
  image: {
    width: 138,
    height: 200
  },
  image2: {
    width: 141,
    height: 200,
    marginLeft: 33
  },
  imageRow: {
    height: 200,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 34,
    marginRight: 41
  },
  ellipse: {
    top: 0,
    left: 83,
    width: 209,
    height: 196,
    position: "absolute"
  },
  rectStack: {
    width: 387,
    height: 683,
    marginTop: 129
  },
  perfil: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 48,
    width: 192,
    fontSize: 32,
    textAlign: "center",
    left: 77
  },
  textInput: {
    top: 3,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "white",
    height: 25,
    width: 96
  },
  textInput1: {
    top: 3,
    left: 261,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "white",
    height: 25,
    width: 96
  },
  perfilStack: {
    width: 357,
    height: 48,
    marginTop: -744,
    marginLeft: 15
  }
});