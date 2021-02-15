import React, {useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash_Screen from '../screens/Splash_Screen';
import MyTabs from './TabNavigator';
import {SigninTab} from './StackNavigator';
import {Appcontext} from '../../App';

const Stack = createStackNavigator();

const RootSwitch = () => {
  const [splash, setSplash] = useState(null);
  const {loggedIn} = useContext(Appcontext);
  useEffect(() => {
    setTimeout(() => {
      setSplash('isLoggedIn');
    }, 3000);
  }, []);
  if (splash === null) {
    return (
      <Stack.Navigator initialRouteName="Sign_in" headerMode="none">
        <Stack.Screen name="Splash Screen" component={Splash_Screen} />
      </Stack.Navigator>
    );
  } else if (loggedIn === false) return <SigninTab />;
  else if (loggedIn) return <MyTabs />;
};

export default RootSwitch;
