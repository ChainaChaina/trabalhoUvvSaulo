// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Novaconta from './components/Novaconta';
import Convite from './components/Convite';
import Dashboard from './components/Dashboard';
import Equipe from './components/Equipe';
import InsideLista from './components/InsideLista';
import ListaFeita from './components/ListaFeita';
import Login from './components/Login';
import Novalista from './components/Novalista';
import Tarefa from './components/Tarefa';
import User from './components/User';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Novaconta" component={Novaconta} />
        <Stack.Screen name="Novalista" component={Novalista} />
        <Stack.Screen name="convite" component={Convite} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Equipe" component={Equipe} />
        <Stack.Screen name="InsideLista" component={InsideLista} />
        <Stack.Screen name="ListaFeita" component={ListaFeita} />
        <Stack.Screen name="Tarefa" component={Tarefa} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;