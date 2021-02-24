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
  TouchableNativeFeedback,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const App = ({navigation}) => {
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
      <View style={styles.head}>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={{
              height: 18.03,
              width: 9.7,
              marginLeft: 10,
              marginTop: 33,
              marginBottom: 12.97,
              // alignSelf: 'flex-start',
            }}
            source={require('../assets/images/titlebar_back_arrow.png')}></Image>
        </TouchableNativeFeedback>
        <Text
          style={{
            fontFamily: 'bariol_regular-webfont',
            fontSize: 30,
            color: 'rgba(255,121,86,1)',
            //marginLeft: 121.3,
            marginBottom: 12.97,
            marginTop: 33,
            alignSelf: 'center',
          }}>
          location
        </Text>
        <View />
      </View>
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
  head: {
    backgroundColor: '#FFFFFF',
    height: 64,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'rgba(232,232,232,1)',
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
