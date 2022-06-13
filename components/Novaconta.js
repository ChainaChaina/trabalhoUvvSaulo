import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

function Novaconta(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.listerr1}>Listerr</Text>
      <Text style={styles.criarNovaConta}>Criar nova conta</Text>
      <View style={styles.placeholder1Stack}>
        <TextInput placeholder="Email" style={styles.placeholder1}></TextInput>
        <View style={styles.rect1}></View>
      </View>
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}></View>
        <TextInput
          placeholder="Confirme o Email"
          style={styles.placeholder2}
        ></TextInput>
      </View>
      <View style={styles.rect3Stack}>
        <View style={styles.rect3}></View>
        <TextInput placeholder="Senha" style={styles.placeholder3}></TextInput>
      </View>
      <View style={styles.text1Stack}>
        <Text style={styles.text1}>Log In</Text>
        <TouchableOpacity style={styles.button1}>
          <View style={styles.text2Stack}>
            <Text style={styles.text2}>Log In</Text>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.criarConta}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listerr1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 44,
    marginTop: 114,
    marginLeft: 123
  },
  criarNovaConta: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 19,
    marginTop: 9,
    marginLeft: 121
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
  rect1: {
    top: 42,
    left: 0,
    width: 313,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)"
  },
  placeholder1Stack: {
    width: 313,
    height: 43,
    marginTop: 96,
    marginLeft: 28
  },
  rect2: {
    top: 42,
    left: 0,
    width: 313,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)"
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
  rect2Stack: {
    width: 313,
    height: 43,
    marginTop: 33,
    marginLeft: 28
  },
  rect3: {
    top: 42,
    left: 0,
    width: 313,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)"
  },
  placeholder3: {
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
  rect3Stack: {
    width: 313,
    height: 43,
    marginTop: 30,
    marginLeft: 28
  },
  text1: {
    top: 11,
    left: 117,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    lineHeight: 22
  },
  button1: {
    top: 0,
    left: 0,
    width: 270,
    height: 41,
    position: "absolute",
    backgroundColor: "rgba(0,148,255,1)",
    borderRadius: 31,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.08,
    shadowRadius: 0
  },
  text2: {
    top: 11,
    left: 117,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    lineHeight: 22
  },
  button2: {
    top: 0,
    left: 0,
    width: 270,
    height: 41,
    position: "absolute",
    backgroundColor: "rgba(0,148,255,1)",
    borderRadius: 31,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.08,
    shadowRadius: 0
  },
  criarConta: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    lineHeight: 22,
    marginTop: 11,
    marginLeft: 98
  },
  text2Stack: {
    width: 270,
    height: 41
  },
  text1Stack: {
    width: 270,
    height: 41,
    marginTop: 30,
    marginLeft: 49
  }
});

export default Novaconta;
