/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';

export default class Splash_Screen extends Component {
  render() {
    return (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image
            source={require('../assets/images/bg.png')}
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View>
          <Image
            style={{justifyContent: 'center', alignItems: 'center'}}
            source={require('../assets/images/logo.png')}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },

  SplashScreen_ChildView: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
