import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Feed from "../screens/Feed"
import React from "react"

const Tabs = createBottomTabNavigator()

export default function LoggedInNav(){
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Feed" component={Feed} />
    </Tabs.Navigator>
  );
}