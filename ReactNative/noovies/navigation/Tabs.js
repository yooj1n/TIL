import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Movies from "../screens/Movies";
import { Ionicons } from "@expo/vector-icons";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import { useLayoutEffect } from "react";
import { Platform } from "react-native";


const Tabs = createBottomTabNavigator();

export default ({navigation, route}) => {
  //useEffect랑 비슷하긴한데, 레이아웃 변경이 다 끝난후에 작동한다. 모든 그래픽이 기본적으로 렌더링된 후에 실행된다는 것.
  useLayoutEffect(() => {
    navigation.setOptions({
      title : getFocusedRouteNameFromRoute(route) || 'Movies'
    });
  }, [route]);
  return (
    <Tabs.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName = Platform.OS === "ios" ? "ios-" : "md-";
        if (route.name === "Movies") {
          iconName += "film";
        } else if (route.name === "TV") {
          iconName += "tv";
        } else if (route.name === "Search") {
          iconName += "search";
        } else if (route.name === "Discovery") {
          iconName += "heart";
        }
        return (
          <Ionicons
            name={iconName}
            color={focused ? "white" : "grey"}
            size={26}
          />
        );
      },
      headerShown:false,
      tabBarShowLabel: false,
      tabBarStyle : {
        backgroundColor: "black",
        borderTopColor: "black"
      },
    })}
      >
      <Tabs.Screen name="Movies" component={Movies}/>
      <Tabs.Screen name="TV" component={Tv}/>
      <Tabs.Screen name="Search" component={Search}/>
      <Tabs.Screen name="Discovery" component={Favs}/>
    </Tabs.Navigator>
  );
} 