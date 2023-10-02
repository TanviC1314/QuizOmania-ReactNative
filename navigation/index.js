import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Quiz from '../screens/quiz';
import Quiz2 from '../screens/quiz2';
import Quiz3 from '../screens/quiz3';
import Quiz4 from '../screens/quiz4';
import Home from '../screens/home';
import Result from '../screens/result';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}}/>
      <Stack.Screen name="Quiz2" component={Quiz2} options={{headerShown:false}}/>
      <Stack.Screen name="Quiz3" component={Quiz3} options={{headerShown:false}}/>
      <Stack.Screen name="Quiz4" component={Quiz4} options={{headerShown:false}}/>
      <Stack.Screen name="Result" component={Result} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default MyStack;