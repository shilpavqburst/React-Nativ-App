import React, {useState} from 'react';
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
    title: 'mobiles',
    img: require('../assets/images/mobile_icn.png'),
  },
  {
    title: 'real estate',
    img: require('../assets/images/realestate_icn.png'),
  },
  {
    title: 'electronics',
    img: require('../assets/images/realestate_icn.png'),
  },
  {
    title: 'leisure',
    img: require('../assets/images/realestate_icn.png'),
  },
  {
    title: 'appliances',
    img: require('../assets/images/appliances_icn.png'),
  },
  {
    title: 'automotive',
    img: require('../assets/images/automotive_icn.png'),
  },
  {
    title: 'pets',
    img: require('../assets/images/pets_icn.png'),
  },
  {
    title: 'sports',
    img: require('../assets/images/sport_icn.png'),
  },
  {
    title: 'furniture',
    img: require('../assets/images/furniture_icn.png'),
  },
  {
    title: 'entertainment',
    img: require('../assets/images/entertainment_icn.png'),
  },
  {
    title: 'instruments',
    img: require('../assets/images/instrument_icn.png'),
  },
  {
    title: 'book/magazine',
    img: require('../assets/images/books_magazine_icn.png'),
  },
  {
    title: 'fashion',
    img: require('../assets/images/fashion_icn.png'),
  },
  {
    title: 'machenery',
    img: require('../assets/images/machenery_icn.png'),
  },
  {
    title: 'others',
    img: require('../assets/images/others_icn.png'),
  },
];

const Dashboard = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <Image
        source={require('../assets/images/bg.png')}
        style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}
      />
      <ScrollView
        style={{backgroundColor: '#00000000'}}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingTop: 100,
        }}>
        {arr.map((itm, indx) => (
          <View style={styles.box}>
            <Image source={itm.img} style={{marginBottom: 5}} />
            <Text
              style={{
                color: '#98817b',
                fontFamily: 'bariol_regular-webfont',
                fontSize: 17,
              }}>
              {itm.title}
            </Text>
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
    width: '30%',
    height: 113,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    marginLeft: 10,
    marginBottom: 10,
  },
  Image: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
});

export default Dashboard;
