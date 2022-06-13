import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Equipe({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Equipe</Text>
      <View style={styles.ellipseRow}>
        <Text style={styles.lucasBorges}>Lucas Borges</Text>
      </View>
      <View style={styles.ellipse1Row}>
        <Text style={styles.audalioJr}>Audálio Jr</Text>
      </View>
      <View style={styles.ellipse2Row}>
        <Text style={styles.dejairPereira}>Dejair Pereira</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 28,
    marginTop: 102,
    alignSelf: "center"
  },
  ellipse: {
    width: 81,
    height: 76
  },
  lucasBorges: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    marginLeft: 23,
    marginTop: 24
  },
  ellipseRow: {
    height: 76,
    flexDirection: "row",
    marginTop: 98,
    marginLeft: 44,
    marginRight: 80
  },
  ellipse1: {
    width: 82,
    height: 76
  },
  audalioJr: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    marginLeft: 23,
    marginTop: 24
  },
  ellipse1Row: {
    height: 76,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 44,
    marginRight: 116
  },
  ellipse2: {
    width: 82,
    height: 76
  },
  dejairPereira: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    marginLeft: 23,
    marginTop: 24
  },
  ellipse2Row: {
    height: 76,
    flexDirection: "row",
    marginTop: 42,
    marginLeft: 44,
    marginRight: 80
  }
});

export default Equipe;
