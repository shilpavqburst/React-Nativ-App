import React from 'react';
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
const arr = [
  {
    img: require('../assets/images/speaker2.jpg'),
    amount: ' \t \t \t \u20B9 \n 45000',
  },
  {
    img: require('../assets/images/phantom.jpg'),
    amount: '\t \t \t \u20B9 \n 45000',
  },
  {
    img: require('../assets/images/phantom2.jpg'),
    amount: '\t \t \t \u20B9 \n 45000',
  },
  {
    img: require('../assets/images/phantom3.jpg'),
    amount: '\t \t \t \u20B9 \n 45000',
  },
];

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.head}>
        <Text
          style={{
            fontFamily: 'bariol_regular-webfont',
            fontSize: 30,
            color: 'rgba(255,121,86,1)',
            //margin: 20,
          }}>
          audio engine
        </Text>
      </View>

      <Swiper
        style={{
          backgroundColor: '#FFFFFF',
          marginBottom: 30,
          //top: 90,
        }}>
        {arr.map((itm, indx) => (
          <View style={styles.slideContainer}>
            <View
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                backgroundColor: 'red',
              }}>
              <ImageBackground
                source={itm.img}
                style={{height: 300, width: '100%', top: 100}}>
                <View
                  style={{
                    width: 310,
                    top: 160,
                    paddingLeft: 280,
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'bariol_regular-webfont',
                      fontSize: 18,
                      borderRadius: 150,
                      paddingTop: 10,
                      paddingLeft: 5,
                      width: 70,
                      height: 70,
                      backgroundColor: 'rgba(0,0,0,0.6)',
                    }}>
                    {itm.amount}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        ))}
      </Swiper>
      <View>
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 20,
          }}>
          <Text style={styles.small}>product title</Text>
          <Text style={styles.big}>audio engine a2+ speakers</Text>
          <Text style={styles.small}>{'\n'}category</Text>
          <Text style={styles.big}>electronics</Text>
          <Text style={styles.small}>{'\n'}seller type</Text>
          <Text style={styles.big}>agent</Text>
          <Text style={styles.small}>{'\n'}price</Text>
          <Text style={styles.big}>45000</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    backgroundColor: '#FFFFFF',
    height: 70,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  slideContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    height: 100,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },

  small: {
    fontSize: 20,
    fontFamily: 'bariol_light-webfont',
    color: '#98817b',
  },
  big: {
    fontSize: 24,
    fontFamily: 'bariol_regular-webfont',
    color: '#98817b',
  },
});

export default App;
