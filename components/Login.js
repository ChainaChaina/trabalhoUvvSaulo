import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";
import { useApp } from "../context/appContext";

export function Login({ navigation }) {


  const { user, setUser } = useApp();
  const [contas, setContas] = useState();
  const [Login, setLogin] = useState('');
  const [Senha, setSenha] = useState('');

  useEffect(() => {
    axios.get('https://62954cb4a7203b3ed079880f.mockapi.io/Contas')
    .then(function (response) {
      console.log(response.data);
      setContas(response.data)
      console.log(contas)
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }, []);


  function login(){
    console.log(contas[0].Login)
    
    if (Login == contas[0].Login )
    {
      navigation.navigate('Perfil', {Login})
      setUser(Login)
    }
    else{
      console.log('Acesso negado')
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.logIn}>Log in</Text>
      <TextInput  onChangeText={(value)=> setLogin(value)} placeholder="    Email" style={styles.email}></TextInput>
      <TextInput placeholder="    Senha" style={styles.email1}></TextInput>
      <TouchableOpacity  onPress={() => login()} style={styles.button1}>
            <Text style={styles.text1}>Log In</Text>
          </TouchableOpacity>
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
  logIn: {
    fontFamily: "roboto-700",
    color: "rgba(8,8,8,1)",
    height: 48,
    width: 192,
    fontSize: 32,
    textAlign: "center",
    marginTop: 68,
    alignSelf: "center"
  },
  email: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 57,
    width: 298,
    backgroundColor: "#fff",
    borderRadius: 9,
    marginTop: 48,
    marginLeft: 36
  },
  email1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 57,
    width: 298,
    backgroundColor: "#fff",
    borderRadius: 9,
    marginTop: 27,
    marginLeft: 36
  },
  materialButtonDark1: {
    height: 58,
    width: 269,
    borderRadius: 61,
    backgroundColor: "rgba(6,6,6,1)",
    marginTop: 291,
    marginLeft: 53
  }
});
