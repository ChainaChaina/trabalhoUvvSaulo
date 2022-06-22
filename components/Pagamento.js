import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import MaterialButtonDark from "./MaterialButtonDark";

export function Pagamento({ navigation }) {

  function Navigate(local){
    navigation.navigate(local)
  }

  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        
        <Text style={styles.pagamento}>Pagamento</Text>
        <Text style={styles.nomeCompleto}>Nome Completo</Text>
        <TextInput
          placeholder="    Nome Do Usuário"
          style={styles.nomeDoUsuario}
        ></TextInput>
        <View style={styles.nomeDoUsuario1StackStack}>
          <View style={styles.nomeDoUsuario1Stack}>
            <TextInput
              placeholder="    MM/YY"
              style={styles.nomeDoUsuario1}
            ></TextInput>
            <View style={styles.nomeCompleto1Stack}>
              <Text style={styles.nomeCompleto1}>Nome Completo</Text>
              <Text style={styles.cvv}>CVV</Text>
            </View>
          </View>
          <TextInput
            placeholder="    ..."
            style={styles.nomeDoUsuario3}
          ></TextInput>
        </View>
        <Text style={styles.cep}>CEP</Text>
        <TextInput
          placeholder="    29018983"
          style={styles.nomeDoUsuario2}
        ></TextInput>
        <TouchableOpacity onPress={() => Navigate('Comprados')}>
        <MaterialButtonDark
          style={styles.materialButtonDark1}
        ></MaterialButtonDark>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(133,169,255,1)"
  },
  rect: {
    width: 351,
    height: 718,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 62,
    marginLeft: 12
  },
  ellipse: {
    width: 166,
    height: 162,
    marginTop: 13,
    marginLeft: 93
  },
  pagamento: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 35,
    width: 190,
    textAlign: "center",
    fontSize: 22,
    marginTop: 28,
    marginLeft: 81
  },
  nomeCompleto: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 190,
    textAlign: "left",
    fontSize: 17,
    marginTop: 39,
    marginLeft: 13
  },
  nomeDoUsuario: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 324,
    backgroundColor: "rgba(231,229,229,1)",
    borderRadius: 3,
    marginLeft: 13
  },
  nomeDoUsuario1: {
    top: 35,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 142,
    backgroundColor: "rgba(231,229,229,1)",
    borderRadius: 3
  },
  nomeCompleto1: {
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 190,
    textAlign: "left",
    top: 0,
    fontSize: 17,
    left: 0
  },
  cvv: {
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 155,
    textAlign: "left",
    top: 1,
    fontSize: 17,
    left: 177
  },
  nomeCompleto1Stack: {
    top: 0,
    left: 0,
    width: 332,
    height: 36,
    position: "absolute"
  },
  nomeDoUsuario1Stack: {
    top: 0,
    left: 0,
    width: 332,
    height: 68,
    position: "absolute"
  },
  nomeDoUsuario3: {
    top: 36,
    left: 177,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 155,
    backgroundColor: "rgba(231,229,229,1)",
    borderRadius: 3
  },
  nomeDoUsuario1StackStack: {
    width: 332,
    height: 69,
    marginTop: 32,
    marginLeft: 13
  },
  cep: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 190,
    textAlign: "left",
    fontSize: 17,
    marginTop: 19,
    marginLeft: 13
  },
  nomeDoUsuario2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 332,
    backgroundColor: "rgba(231,229,229,1)",
    borderRadius: 3,
    marginLeft: 13
  },
  materialButtonDark1: {
    height: 38,
    width: 269,
    borderRadius: 61,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 90,
    marginLeft: 41
  }
});
