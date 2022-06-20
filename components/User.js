import React, { Component, useEffect, useState } from "react";
import { useApp } from "../context/appContext";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import axios from "axios";




function User({ navigation }) {
  const { user, setUser } = useApp();
  const [Logins, setLogins] = useState({email:'user'});

  useEffect(() => {
    axios.get('https://62a6865fb9b74f766a483458.mockapi.io/users/1')
    .then(function (response) {
      console.log(response.data);
      setLogins(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.photo} ></View>
      <Text style={styles.usuario1}>{Logins.email}</Text>
      <View style={styles.userEmailGmailComRow}>
        <Text style={styles.userEmailGmailCom}>{user}</Text>
        <Icon name="edit-3" style={styles.icon}></Icon>
      </View>
      <Text style={styles.usuario2}>*********</Text>
      <Text style={styles.portuguesBrasil}>Português - Brasil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  photo:{
    maxWidth:150,
    minHeight: 150,
    borderRadius: 500,
    backgroundColor:'#C4C4C4',
    marginTop: 50,
    marginLeft: 110,
    },
  ellipse: {
    width: 157,
    height: 152,
    marginTop: 140,
    alignSelf: "center"
  },
  usuario1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 28,
    marginTop: 23,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  userEmailGmailCom: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    textDecorationLine: "underline",
    marginTop: 10
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 7
  },
  userEmailGmailComRow: {
    height: 41,
    flexDirection: "row",
    marginTop: 77,
    marginLeft: 44,
    marginRight: 37
  },
  usuario2: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 28,
    marginTop: 48,
    marginLeft: 44
  },
  portuguesBrasil: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 23,
    marginTop: 34,
    marginLeft: 44
  }
});

export default User;
