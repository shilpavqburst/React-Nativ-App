import React, {useState} from 'react';

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
