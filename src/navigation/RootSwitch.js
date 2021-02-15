import React, {useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash_Screen from '../screens/Splash_Screen';
import MyTabs from './TabNavigator';
import {SigninTab} from './StackNavigator';
import {Appcontext} from '../../App';
import Audio_Engine from '../screens/Audio_Engine';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const RootSwitch = () => {
  const [splash, setSplash] = useState(null);
  const {loggedIn} = useContext(Appcontext);

  useEffect(() => {
    setTimeout(() => {
      setSplash('isLoggedIn');
    }, 3000);
  }, []);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (splash === null) {
    return (
      <Stack.Navigator initialRouteName="Sign_in" headerMode="none">
        <Stack.Screen name="Splash Screen" component={Splash_Screen} />
      </Stack.Navigator>
    );
  } else if (!user) return <SigninTab />;
  else if (user)
    return (
      <Stack.Navigator initialRouteName="Sign_in" headerMode="none">
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Audio engine" component={Audio_Engine} />
      </Stack.Navigator>
    );
};

export default RootSwitch;
