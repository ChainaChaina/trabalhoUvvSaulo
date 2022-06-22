// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from './components/Welcome';
import { CriarConta } from './components/CriarConta';
import { Perfil } from './components/Perfil';
import { CriarPost } from './components/CriarPost';
import { Pagamento } from './components/Pagamento';
import { Biblioteca } from './components/Biblioteca';
import { Comprados } from './components/Comprados';
import { Idioma } from './components/Idioma';
import { Login } from './components/Login';
import AppContext from './context/appContext';

const Stack = createNativeStackNavigator();

function App() {
  return ( 
     <AppContext>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
    headerShown: false
  }}>
         <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Pagamento" component={Pagamento} />
        <Stack.Screen name="Biblioteca" component={Biblioteca} />
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="CriarPost" component={CriarPost} />
        <Stack.Screen name="Idioma" component={Idioma} />  
        <Stack.Screen name="Comprados" component={Comprados} />
        <Stack.Screen name="CriarConta" component={CriarConta} />

      </Stack.Navigator>
    </NavigationContainer>
  </AppContext> 
  );
}

export default App;