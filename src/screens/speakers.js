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
    title: 'kenwood mini speakers',
    img: require('./src/assets/images/speaker1.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
    img2: require('./src/assets/images/time_ICN2.png'),
    time: '07:30 pm',
  },

  {
    title: 'devialet phantom wireless',
    img: require('./src/assets/images/speaker2.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 13500',
    img2: require('./src/assets/images/time_ICN1.png'),
    time: '09:30 pm',
  },
  {
    title: 'polk audio lsim 705',
    img: require('./src/assets/images/speaker3.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 17000',
    img2: require('./src/assets/images/time_ICN.png'),
    time: '10:00 pm',
  },
  {
    title: 'audio engine a2+',
    img: require('./src/assets/images/speaker4.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 45000',
    img2: require('./src/assets/images/date_ICN1.png'),
    time: '28/06/16',
  },
  {
    title: 'bowerswilkins - dm602',
    img: require('./src/assets/images/speaker5.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 9500',
    img2: require('./src/assets/images/date_ICN.png'),
    time: '28/06/16',
  },
  {
    title: 'philips multi speakers',
    img: require('./src/assets/images/speaker6.jpg'),
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
