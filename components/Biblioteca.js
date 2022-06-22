import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useApp } from "../context/appContext";

export function Biblioteca({ navigation }) {

  const { user } = useApp();

  function Navigate(local){
    navigation.navigate(local)
  }

  return (
    <View style={styles.container}>
      <View style={styles.bibliotecaStack}>
        <Text style={styles.biblioteca}>Biblioteca</Text>
        <TextInput
          placeholder="voltar"
          placeholderTextColor="rgba(255,255,255,1)"
          style={styles.textInput}
        ></TextInput>
        <Image
          source={require("../assets/images/move.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.rect}>
        <Text style={styles.loja}>Loja</Text>
        <Text style={styles.loremIpsum2}>{`Promoções para ${user}`}</Text>

        <TouchableOpacity onPress={() => Navigate('Pagamento')}>
            <Image
                source={require("../assets/images/filme1.webp")}
                resizeMode="contain"
                style={styles.image2}
            ></Image>
            </TouchableOpacity>
        <Text style={styles.loremIpsum1}>Filmes/Séries em Promoção</Text>
        <Text style={styles.r1999}>R$ 19.99</Text>
        <Text style={styles.emAlta}>Em Alta</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(133,169,255,1)"
  },
  biblioteca: {
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
    color: "#121212",
    height: 25,
    width: 96,
    left: 0
  },
  image: {
    top: 51,
    left: 0,
    width: 331,
    height: 200,
    position: "absolute",
    borderRadius: 33
  },
  bibliotecaStack: {
    width: 331,
    height: 251,
    marginTop: 60,
    marginLeft: 21
  },
  rect: {
    width: 375,
    height: 941,
    backgroundColor: "#E6E6E6",
    marginTop: 12
  },
  loja: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    height: 48,
    width: 192,
    fontSize: 32,
    textAlign: "center",
    opacity: 0.57,
    marginTop: 10,
    marginLeft: 92
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 24,
    width: 285,
    fontSize: 26,
    marginTop: 20,
    marginLeft: 25
  },
  image2: {
    width: 157,
    height: 157,
    marginTop: 55,
    marginLeft: 11
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 24,
    width: 142,
    fontSize: 18,
    marginTop: 7,
    marginLeft: 32
  },
  r1999: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 24,
    width: 142,
    fontSize: 18,
    marginTop: 23,
    marginLeft: 32
  },
  emAlta: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 24,
    width: 285,
    fontSize: 26,
    marginTop: 18,
    marginLeft: 32
  }
});
