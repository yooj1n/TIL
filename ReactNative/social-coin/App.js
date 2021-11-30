import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import InNav from './navigators/InNav';
import OutNav from './navigators/OutNav';

export default function App() {
  const [isLoggenIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    })
  }, [])
  return (
    <NavigationContainer>
      {isLoggenIn ? <InNav /> : <OutNav />}
    </NavigationContainer>
  )
}
