import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

/* Stack.Screen은 name과 component를 필요로한다.
Stack.Navigator가 component에게 prop을 준다. 그 popr이 Navigation이다.
Navigator의 모든 Screen은 Navigation이라는 prop에 접근권을 가지고있다.

*/
export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Tab" component={Tabs} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);