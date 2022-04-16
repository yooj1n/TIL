import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainTab from './MainTab';
import WriteScreen from './WriteScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        options={{headerShown: false}}
        component={MainTab}
      />
      <Stack.Screen
        name="Write"
        options={{headerShown: false}}
        component={WriteScreen}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
