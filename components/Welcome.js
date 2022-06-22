import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";



export function Welcome({ navigation }) {


  function welcome(local){
    navigation.navigate(local)
  }

  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.rect2}>
          <Text style={styles.cinefilo}>Cinéfilo</Text>
        </View>
        <TouchableOpacity  onPress={() => welcome('Login')} style={styles.button1}>
            <Text style={styles.text1}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => welcome('CriarConta')} style={styles.log}>
          <Text style={styles.inscrevaSe}>Inscreva-se</Text>
          </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button1: {
    top: 0,
    margin: 'auto',
    width: 270,
    height: 41,
    backgroundColor: "black",
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
  text1:{
    margin: 'auto',
    color:  'white'

  },
  container: {
    flex: 1,
    backgroundColor: "rgba(133,169,255,1)"
  },
  rect: {
    width: 320,
    height: 671,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 79,
    marginLeft: 27
  },
  rect2: {
    width: 253,
    height: 254,
    backgroundColor: "rgba(12,12,12,1)",
    borderRadius: 39,
    marginTop: 41,
    marginLeft: 34
  },
  cinefilo: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 48,
    width: 192,
    fontSize: 32,
    textAlign: "center",
    marginTop: 203,
    marginLeft: 31
  },
  materialButtonDark: {
    height: 68,
    width: 269,
    borderRadius: 29,
    backgroundColor: "rgba(6,6,6,1)",
    marginTop: 216,
    marginLeft: 26
  },
  inscrevaSe: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: 170,
    textAlign: "center",
    fontSize: 20,
    marginTop: -150,
    marginLeft: 76
  }
});

