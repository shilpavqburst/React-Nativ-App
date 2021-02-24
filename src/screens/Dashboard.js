import React, {useState} from 'react';
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
  Dimensions,
  FlatList,
} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
const {height, width} = Dimensions.get('screen');

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
    img: require('../assets/images/electronics_icn.png'),
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

const Dashboard = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        source={require('../assets/images/bg.png')}
        style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}
      />
      <View style={styles.head}>
        <Text
          style={{
            fontFamily: 'bariol_regular-webfont',
            fontSize: 30,
            color: 'rgba(255,121,86,1)',
            //margin: 20,
          }}>
          dashboard
        </Text>
      </View>
      <FlatList
        data={arr}
        contentContainerStyle={{
          marginTop: '2%',
          marginLeft: '2.5%',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        keyExtractor={(itm, indx) => {
          indx.toString();
        }}
        renderItem={({item, index}) => (
          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate('Electronics');
            }}>
            <View style={styles.box}>
              <View style={styles.img}>
                <Image source={item.img} />
              </View>
              <Text
                style={{
                  color: '#98817b',
                  fontFamily: 'bariol_regular-webfont',
                  fontSize: 17,
                  //width: '100%',
                  marginTop: 8,
                  alignSelf: 'center',
                }}>
                {item.title}
              </Text>
            </View>
          </TouchableNativeFeedback>
        )}
      />
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
  head: {
    backgroundColor: '#FFFFFF',
    height: 64,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(232,232,232,1)',
  },
  box: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    height: 107,
    width: 107,
    marginBottom: 9,
    marginRight: 9,
    shadowColor: 'rgba(0,0,0,0.07)',
    shadowRadius: 3,
    borderWidth: 1,
    borderColor: '#fff',
  },
  img: {
    width: 41,
    height: 41,
    justifyContent: 'center',
  },
});

export default Dashboard;
