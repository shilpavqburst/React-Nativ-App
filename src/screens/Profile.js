import React from 'react';

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
    title: ' audio engine a2+ speakers ',
    img: require('../assets/images/speaker2.jpg'),
    basetext: ' kochi, kerala ',
    img2: require('../assets/images/listarrow_icn.png'),
  },
  {
    title: ' imac 4k display ',
    img: require('../assets/images/apple_pc.jpg'),
    basetext: ' kochi, kerala ',
    img2: require('../assets/images/listarrow_icn.png'),
  },
  {
    title: ' apple air + camera ',
    img: require('../assets/images/camera.jpg'),
    basetext: ' kochi, kerala ',
    img2: require('../assets/images/listarrow_icn.png'),
  },
  {
    title: ' puma shoes ',
    img: require('../assets/images/shoe.jpg'),
    basetext: ' kochi, kerala ',
    img2: require('../assets/images/listarrow_icn.png'),
  },
  {
    title: ' audio engine a2+ speakers ',
    img: require('../assets/images/speaker2.jpg'),
    basetext: ' kochi, kerala ',
    img2: require('../assets/images/listarrow_icn.png'),
  },
  {
    title: ' imac 4k display ',
    img: require('../assets/images/apple_pc.jpg'),
    basetext: ' kochi, kerala ',
    img2: require('../assets/images/listarrow_icn.png'),
  },
  {
    title: ' apple air + camera ',
    img: require('../assets/images/camera.jpg'),
    basetext: ' kochi, kerala ',
    img2: require('../assets/images/listarrow_icn.png'),
  },
  {
    title: ' puma shoes ',
    img: require('../assets/images/shoe.jpg'),
    basetext: ' kochi, kerala ',
    img2: require('../assets/images/listarrow_icn.png'),
  },
];

const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.head}>
        <Image
          style={{
            height: 18,
            width: 17,
            marginTop: 33,
            marginBottom: 13,
            marginLeft: 10,
            alignSelf: 'flex-start',
          }}
          source={require('../assets/images/logout_icn.png')}></Image>
        <Text
          style={{
            fontFamily: 'bariol_regular-webfont',
            fontSize: 30,
            color: 'rgba(255,121,86,1)',
            marginTop: 33,
            marginBottom: 12,
            //marginRight: 122,
            alignSelf: 'center',
          }}>
          profile
        </Text>
        <Image
          style={{
            height: 19,
            width: 19,
            marginRight: 9,
            marginTop: 33,
            marginBottom: 12,
          }}
          source={require('../assets/images/edit_icn.png')}></Image>
      </View>
      <ScrollView
        style={{
          // marginTop: 63,
          backgroundColor: 'rgba(222,222,222,0.75)',
          height: '100%',
        }}>
        <View style={{height: 280}}>
          <ImageBackground
            style={styles.bg}
            source={require('../assets/images/bg.png')}>
            <Image
              style={styles.logo}
              source={require('../assets/images/profile_pic.png')}
            />
            <Text
              style={{
                color: '#98817b',
                fontSize: 18,
                marginTop: 9,
                marginLeft: 50,
                fontFamily: 'bariol_light-webfont',
              }}>
              edit image
            </Text>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 177,
                marginTop: -115,
              }}>
              <Text style={styles.small}>username</Text>
              <Text style={styles.big}>jennifer smith</Text>
              <Text style={styles.small}>email id</Text>
              <Text style={styles.big}>jenni@qburst.com</Text>
              <Text style={styles.small}>mobile</Text>
              <Text style={styles.big}>+91 98950 66224</Text>
              <Text style={styles.small}>address</Text>
              <Text style={styles.big}>
                qburst technologies Inforpark, kakkanad kochi
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            //marginTop: 343,
            height: 40,
            margin: 0.5,
          }}>
          <Text
            style={{
              fontFamily: 'bariol_regular-webfont',
              fontSize: 22,
              marginTop: 9,
              marginBottom: 9,
              marginLeft: 10,
              color: '#98817b',
            }}>
            my ads
          </Text>
        </View>

        {arr.map((itm, indx) => (
          <View style={styles.box} key={indx}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  justifyContent: 'center',
                  marginTop: 9,
                  marginBottom: 9,
                  //marginLeft: 9,
                }}>
                <Image source={itm.img} style={{height: 55, width: 55}} />
              </View>

              <View
                style={{width: 290, marginLeft: 9, justifyContent: 'center'}}>
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
              </View>
            </View>
            <View style={{right: 15, position: 'absolute'}}>
              <Image source={itm.img2} />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    // flex: 1,
  },

  bg: {
    position: 'absolute',
    width: '100%',
    height: 280,
  },
  head: {
    backgroundColor: '#FFFFFF',
    height: 70,
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'rgba(232,232,232,1)',
    flexDirection: 'row',
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 21,
    alignItems: 'center',
    marginLeft: 50,
  },
  maincontainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
  },
  small: {
    fontSize: 16,
    fontFamily: 'bariol_light-webfont',
    color: '#98817b',
    marginTop: 9,
  },
  big: {
    fontSize: 20,
    fontFamily: 'bariol_regular-webfont',
    color: '#98817b',
  },
  box: {
    width: '100%',
    height: 65,
    alignItems: 'center',
    // margin: 0.5,
    backgroundColor: 'rgba(255,255,255,0.4)',
    flexDirection: 'row',
    padding: 9,
    borderColor: 'rgba(222,222,222,0.75)',
    borderWidth: 0.5,
    opacity: 0.98,
    justifyContent: 'space-between',
  },
});

export default Profile;
