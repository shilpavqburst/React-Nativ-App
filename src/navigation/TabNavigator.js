import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import Chat from '../screens/Chat';
import Favourite from '../screens/Favourite';
import Profile from '../screens/Profile';
import {CreateAdTab, DashbaordTab} from './StackNavigator';
//import homeActive from '../assets/images/home_tabbar_active.png';
//import homeInActive from '../assets/images/home_tabbar_normal.png';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'rgba(255, 121, 86, 1)',
        tabStyle: {borderRightWidth: 0.5, borderColor: 'lightgrey'},
        activeBackgroundColor: 'rgba(255, 255, 255, 1)',
        inactiveBackgroundColor: 'rgba(248, 248, 248, 1)',
      }}>
      <Tab.Screen
        name="Home"
        component={DashbaordTab}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            if (focused)
              return (
                <Image
                  style={{width: 30, height: 30, top: 8}}
                  source={require('../assets/images/home_tabbar_active.png')}
                />
              );
            else
              return (
                <Image
                  style={{width: 30, height: 30, top: 8}}
                  source={require('../assets/images/home_tabbar_normal.png')}
                />
              );
          },
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourite}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            if (focused)
              return (
                <Image
                  style={{width: 30, height: 30, top: 8}}
                  source={require('../assets/images/favourite_tabbar_active.png')}
                />
              );
            else
              return (
                <Image
                  style={{width: 30, height: 30, top: 8}}
                  source={require('../assets/images/favourite_tabbar_normal.png')}
                />
              );
          },
        }}
      />
      <Tab.Screen
        name="Create Ad"
        component={CreateAdTab}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            if (focused)
              return (
                <Image
                  style={{width: 35, height: 30, top: 8}}
                  source={require('../assets/images/camera_tabbar_active.png')}
                />
              );
            else
              return (
                <Image
                  style={{width: 35, height: 30, top: 8}}
                  source={require('../assets/images/camera_tabbar_normal.png')}
                />
              );
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            if (focused)
              return (
                <Image
                  style={{width: 30, height: 30, top: 8}}
                  source={require('../assets/images/chat_tabbar_active.png')}
                />
              );
            else
              return (
                <Image
                  style={{width: 30, height: 30, top: 8}}
                  source={require('../assets/images/chat_tabbar_normal.png')}
                />
              );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            if (focused)
              return (
                <Image
                  style={{width: 30, height: 30, top: 8}}
                  source={require('../assets/images/profile_tabbar_active.png')}
                />
              );
            else
              return (
                <Image
                  style={{width: 30, height: 30, top: 8}}
                  source={require('../assets/images/profile_tabbar_normal.png')}
                />
              );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
