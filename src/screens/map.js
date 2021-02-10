import React, {useState} from 'react';
import Swiper from 'react-native-swiper';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
const arr = [
  {
    img: require('./src/assets/images/speaker2.jpg'),
    amount: ' \t \t \t \u20B9 \n 45000',
  },
  {
    img: require('./src/assets/images/phantom.jpg'),
    amount: '\t \t \t \u20B9 \n 45000',
  },
  {
    img: require('./src/assets/images/phantom2.jpg'),
    amount: '\t \t \t \u20B9 \n 45000',
  },
  {
    img: require('./src/assets/images/phantom3.jpg'),
    amount: '\t \t \t \u20B9 \n 45000',
  },
];

const App = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [dragPos, setDragPos] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const onRegionChange = (regn) => {
    setRegion(regn);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView style={{flex: 1}} initialRegion={region}>
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
        />
      </MapView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  slideContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    height: 300,
    width: '100%',
    backgroundColor: 'red',
  },

  small: {
    fontSize: 20,
    fontFamily: 'bariol_light-webfont',
    color: '#98817b',
  },
  big: {
    fontSize: 22,
    fontFamily: 'bariol_regular-webfont',
    color: '#98817b',
  },
});

export default App;
