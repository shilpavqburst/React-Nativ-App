import React from 'react';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Link,
  TextInput,
  StatusBar,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';

const arr = [
  {
    title: 'puma white leather bag',
    img: require('./src/assets/images/bag.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
    img2: require('./src/assets/images/time_ICN2.png'),
    time: '07:30 pm',
  },

  {
    title: 'diamond ring with platinum',
    img: require('./src/assets/images/ring.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 13500',
    img2: require('./src/assets/images/time_ICN1.png'),
    time: '09:30 pm',
  },
  {
    title: 'ghostly enemelware mug',
    img: require('./src/assets/images/mug.jpg'),
    basetext: 'alzoor, karnataka',
    price: '\u20B9 75000',
    img2: require('./src/assets/images/time_ICN.png'),
    time: '10:00 pm',
  },
  {
    title: 'audio engine - xb03',
    img: require('./src/assets/images/speaker7.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 45000',
    img2: require('./src/assets/images/date_ICN1.png'),
    time: '28/06/16',
  },
  {
    title: 'movado circa analogue watch',
    img: require('./src/assets/images/watch.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 9500',
    img2: require('./src/assets/images/date_ICN.png'),
    time: '28/06/16',
  },
  {
    title: 'apple m2xc/a usb cable',
    img: require('./src/assets/images/headphone.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
    img2: require('./src/assets/images/time_ICN.png'),
    time: '07:00 pm',
  },
  {
    title: 'earbuds bts',
    img: require('./src/assets/images/earbuds.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 50000',
    img2: require('./src/assets/images/time_ICN.png'),
    time: '10:00 pm',
  },
];

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        style={{backgroundColor: '#e8e8e8'}}
        contentContainerStyle={{
          flexDirection: 'column',
          flexWrap: 'wrap',
          paddingTop: 100,
        }}>
        {arr.map((itm, indx) => (
          <View style={styles.box}>
            <View
              style={{
                width: 50,
                height: 50,
                //borderRightWidth: 0.5,
                //borderColor: '#C1C1C1',
                justifyContent: 'center',
              }}>
              <Image source={itm.img} style={{height: 80, width: 80}} />
            </View>

            <View style={{width: 290, paddingLeft: 40}}>
              <Text
                style={{
                  color: '#98817b',
                  fontFamily: 'bariol_regular-webfont',
                  fontSize: 20,
                }}>
                {itm.title}
              </Text>
              <Text
                style={{
                  color: '#98817b',
                  fontFamily: 'bariol_regular-webfont',
                  fontSize: 14,
                }}>
                {itm.basetext}
              </Text>
              <Text
                style={{
                  color: '#FF7F50',
                  fontFamily: 'bariol_regular-webfont',
                  fontSize: 20,
                }}>
                {itm.price}
              </Text>
            </View>
            <View style={{flexDirection: 'row', top: 30}}>
              <Image source={itm.img2} />
              <Text
                style={{
                  color: '#FF7F50',
                  fontFamily: 'bariol_regular-webfont',
                  fontSize: 20,
                }}>
                {itm.time}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },

  container: {
    flex: 1,
  },
  box: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    margin: 0.5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 10,
    borderColor: '#FFFFFF',
  },
});

export default App;
