import React from'react';
import GitHomeComponent from './src/components/GitHomeComponent';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GitProfileComponent from './src/components/GitProfileComponent';

const App = () =>{

  const Stack = createNativeStackNavigator()

  return (<NavigationContainer>
         <Stack.Navigator>
          <Stack.Screen name='Home' component={GitHomeComponent} />
          <Stack.Screen name='Profile' component={GitProfileComponent} />
         </Stack.Navigator>
        </NavigationContainer>)
  
}


export default App;