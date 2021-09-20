import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from "../screens/Welcome";
import CreateAccount from "../screens/CreateAccount";
import LogIn from "../screens/LogIn";

const Stack = createStackNavigator();

export default function LoggedOutNav(){
  return (
    <Stack.Navigator 
    screenOptions={{
      headerBackTitleVisible:false
    }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}