import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Sign_in from '../screens/Sign_in';
import Sign_up from '../screens/Sign_up';
import Dashboard from '../screens/Dashboard';
import Electronics from '../screens/Electronics';
import Speakers from '../screens/Speakers';
import Speaker_Gridview from '../screens/Speaker_Gridview';
import Location from '../screens/Location';
import Create_Ad from '../screens/Create_Ad';
import Preview from '../screens/Preview';

const Stack = createStackNavigator();

function SigninTab() {
  return (
    <Stack.Navigator initialRouteName="Sign_in" headerMode="none">
      <Stack.Screen name="Sign in" component={Sign_in} />
      <Stack.Screen name="Sign up" component={Sign_up} />
    </Stack.Navigator>
  );
}

function DashbaordTab() {
  return (
    <Stack.Navigator initialRouteName="Dashboard" headerMode="none">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Electronics" component={Electronics} />
      <Stack.Screen name="Speakers" component={Speakers} />
      <Stack.Screen name="Speaker Gridview" component={Speaker_Gridview} />

      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
}

function CreateAdTab() {
  return (
    <Stack.Navigator initialRouteName="Create_Ad" headerMode="none">
      <Stack.Screen name="Create Ad" component={Create_Ad} />
      <Stack.Screen name="Preview" component={Preview} />
    </Stack.Navigator>
  );
}

export {SigninTab, DashbaordTab, CreateAdTab};
