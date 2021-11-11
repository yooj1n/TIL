import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { DARK_COLOR } from "../colors";
import Home from "../screens/Home";

const Nav = createNativeStackNavigator();

const InNav = () => (
  <Nav.Navigator
  screenOptions={{
    headerTintColor:"white",
    headerStyle: {
      backgroundColor: DARK_COLOR,
    }
  }}
  >
    <Nav.Screen name="COIN" component={Home} />
  </Nav.Navigator>
) ;

export default InNav; 