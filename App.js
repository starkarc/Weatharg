import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Home from './screens/Home/Home';
import Cities from './screens/Cities/Cities';
import City from './screens/City/City';
import ClimeCity from './screens/ClimeCity/ClimeCity';
import ClimeListCity from './screens/ClimeListCity/ClimeListCity';
import ListCities from './screens/ListCities/ListCities';

const Stack = createNativeStackNavigator();

export default function App() {
 
  return (<GestureHandlerRootView style={{flex: 1}}> 
    <StatusBar animated={true} backgroundColor="#142950" barStyle="light-content"/>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: "Clima Ahora"}} />  
        <Stack.Screen name="City" component={City} options={{title: "Nueva Ciudad"}} /> 
        <Stack.Screen name="ClimeCity" component={ClimeCity} options={{title: "Clima Ciudad"}} />
        <Stack.Screen name="Cities" component={Cities} options={{title: "Ciudades"}} />         
        <Stack.Screen name="ListCities" component={ListCities} options={{title: "Lista Ciudades"}} />
        <Stack.Screen name="ClimeListCity" component={ClimeListCity} options={{title: "Lista Clima Ciudad"}} />
      </Stack.Navigator>
    </NavigationContainer>
  </GestureHandlerRootView>
  )
    
};
