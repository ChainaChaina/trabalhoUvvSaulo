import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  
} from "react-native";
import axios from "axios";

 

function Login({ navigation }) {


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


  const [Logins, setLogins] = useState();

  const [Login, setLogin] = useState('');
  const [Senha, setSenha] = useState('');


  function loginFunction(){
    console.log(Logins.email)
    if (Login == Logins.email || Senha == Logins.password  )
    {
      navigation.navigate('Dashboard')
    }
    else{
      console.log('senha errada')
    }
  }
 

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.textStack}>
          <Text style={styles.text}>Log In</Text>
          <TouchableOpacity  onPress={() => loginFunction()} style={styles.button1}>
            <Text style={styles.text1}>Log In</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View style={styles.placeholderStack}>
        <TextInput onChangeText={(value)=> setLogin(value)} placeholder="Email" style={styles.placeholder}></TextInput>
        <View style={styles.rect}></View>
      </View>
      <View style={styles.placeholder1Stack}>
        <TextInput onChangeText={(value)=> setSenha(value)}  secureTextEntry={true} placeholder="Senha" style={styles.placeholder1}></TextInput>
        <View style={styles.rect1}></View>
      </View>
      <Text onPress={() => navigation.navigate('Novaconta')} style={styles.criarNovaConta}>Criar nova conta</Text>
      <Text style={styles.listerr1}>Listerr</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    width: 270,
    height: 41,
    backgroundColor: "rgba(0,148,255,1)",
    borderRadius: 31,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.08,
    shadowRadius: 0,
    marginTop: 517,
    marginLeft: 49
  },
  text: {
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
  text1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    lineHeight: 22,
    marginTop: 11,
    marginLeft: 117
  },
  textStack: {
    width: 270,
    height: 41
  },
  placeholder: {
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
  rect: {
    top: 42,
    left: 0,
    width: 313,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)"
  },
  placeholderStack: {
    width: 313,
    height: 43,
    marginTop: -236,
    marginLeft: 28
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
    textAlign: "left",
  },
  rect1: {
    top: 41,
    left: 0,
    width: 313,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)"
  },
  placeholder1Stack: {
    width: 313,
    height: 43,
    marginTop: 30,
    marginLeft: 28
  },
  criarNovaConta: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 19,
    marginTop: 201,
    marginLeft: 117
  },
  listerr1: {
    // fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 44,
    marginTop: -492,
    alignSelf: "center"
  }
});

export default Login;
