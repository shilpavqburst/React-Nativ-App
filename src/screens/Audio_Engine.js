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
  TouchableNativeFeedback,
  Linking,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const arr = [
  {
    img: require('../assets/images/speaker2.jpg'),
    amount: ' \t\t \u20B9 \n45000',
  },
  {
    img: require('../assets/images/phantom.jpg'),
    amount: '\t\t \u20B9 \n45000',
  },
  {
    img: require('../assets/images/phantom2.jpg'),
    amount: '\t\t \u20B9 \n45000',
  },
  {
    img: require('../assets/images/phantom3.jpg'),
    amount: '\t\t \u20B9 \n45000',
  },
];

const App = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.head}>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={{
              height: 18,
              width: 10,
              marginLeft: 10,
              marginTop: 33,
              marginBottom: 13,
              alignSelf: 'flex-start',
              marginRight: 93.3,
            }}
            source={require('../assets/images/titlebar_back_arrow.png')}></Image>
        </TouchableNativeFeedback>
        <Text
          style={{
            fontFamily: 'bariol_regular-webfont',
            fontSize: 30,
            color: 'rgba(255,121,86,1)',
            //margin: 20,
            marginTop: 33,
            marginBottom: 13,
            alignSelf: 'center',
            marginRight: 40,
          }}>
          audio engine
        </Text>
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate('Location');
            }}>
            <Image
              style={{
<<<<<<< HEAD
                height: 18,
                width: 16,
                //marginRight: 14,
                marginTop: 33,
                marginBottom: 13,
                alignSelf: 'flex-end',
              }}
              source={require('../assets/images/mapview_normal_icn.png')}></Image>
          </TouchableNativeFeedback>
          <Image
            style={{
              height: 19,
              width: 21,
              paddingRight: 10,
              marginTop: 33,
              marginBottom: 13,
              alignSelf: 'flex-end',
              marginLeft: 14,
            }}
            source={require('../assets/images/fav_normal_icn.png')}></Image>
        </View>
      </View>
      <ScrollView style={{backgroundColor: '#fff'}}>
        <Swiper
          paginationStyle={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            height: 14,
            paddingHorizontal: 20,
          }}
          activeDotColor="rgba(255,121,86,1)"
          dotColor="#fff"
          dotStyle={{height: 6, width: 6}}
          style={{
            backgroundColor: '#FFFFFF',
            marginBottom: 26,
            //top: 90,
            height: 200,
          }}>
          {arr.map((itm, indx) => (
            <View style={styles.slideContainer}>
              <View
                style={{
                  width: '100%',
                  height: 200,
                  justifyContent: 'center',
                  backgroundColor: '#FFFFFF',
                }}>
                <ImageBackground
                  source={itm.img}
                  style={{height: 200, width: '100%'}}>
                  <View
=======
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
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
>>>>>>>  screens updated
                    style={{
                      position: 'absolute',
                      right: 10,
                      bottom: 30,
                      // paddingLeft: 280,
                    }}>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontFamily: 'Bariol_Bold',
                        fontSize: 13,
                        borderRadius: 25,
                        paddingTop: 10,
                        paddingLeft: 5,
                        width: 50,
                        height: 50,
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        borderWidth: 2,
                        borderColor: 'rgba(156,156,156,0.27)',
                      }}>
                      {itm.amount}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
          ))}
        </Swiper>
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 20,
            backgroundColor: '#fff',
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
      </ScrollView>
      <ImageBackground
        style={{
          height: 180,
        }}
        source={require('../assets/images/bg.png')}>
        <Text
          style={{
            fontFamily: 'bariol_regular-webfont',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 12,
            color: 'rgba(162,134,128,1)',
          }}>
          seller details
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 24,
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <TouchableNativeFeedback
              onPress={() => {
                Linking.openURL('tel:+XXXXXXXXXX');
              }}>
              <Image
                style={{height: 70, width: 70, marginLeft: 20}}
                source={require('../assets/images/call.png')}
              />
            </TouchableNativeFeedback>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'bariol_regular-webfont',
                color: 'rgba(162,134,128,1)',
                marginTop: 11,
                marginLeft: 15,
              }}>
              call
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',

              alignItems: 'center',
            }}>
            <TouchableNativeFeedback
              onPress={() => {
                navigation.navigate('Chat');
              }}>
              <Image
                style={{
                  height: 70,
                  width: 70,
                  alignSelf: 'center',
                }}
                source={require('../assets/images/chat.png')}
              />
            </TouchableNativeFeedback>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'bariol_regular-webfont',
                color: 'rgba(162,134,128,1)',
                marginTop: 11,
              }}>
              chat
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',

              alignItems: 'center',
            }}>
            <TouchableNativeFeedback
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Image
                style={{
                  height: 70,
                  width: 70,
                  marginRight: 20,
                }}
                source={require('../assets/images/profile.png')}
              />
            </TouchableNativeFeedback>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'bariol_regular-webfont',
                color: 'rgba(162,134,128,1)',
                marginTop: 11,
                marginRight: 20,
              }}>
              profile
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
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
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'rgba(232,232,232,1)',
  },

  slideContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    height: 200,
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
