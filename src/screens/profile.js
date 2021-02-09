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
    img: require('./src/assets/images/speaker2.jpg'),
    basetext: ' kochi, kerala ',
    img2: require('./src/assets/images/listarrow_icn.png'),
  },
  {
    title: ' imac 4k display ',
    img: require('./src/assets/images/apple_pc.jpg'),
    basetext: ' kochi, kerala ',
    img2: require('./src/assets/images/listarrow_icn.png'),
  },
  {
    title: ' apple air + camera ',
    img: require('./src/assets/images/camera.jpg'),
    basetext: ' kochi, kerala ',
    img2: require('./src/assets/images/listarrow_icn.png'),
  },
  {
    title: ' puma shoes ',
    img: require('./src/assets/images/shoe.jpg'),
    basetext: ' kochi, kerala ',
    img2: require('./src/assets/images/listarrow_icn.png'),
  },
];

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}></View>
      <ImageBackground
        style={styles.bg}
        source={require('./src/assets/images/bg.png')}>
        <Image
          style={styles.logo}
          source={require('./src/assets/images/profile_pic.png')}
        />
        <Text
          style={{
            color: '#98817b',
            fontSize: 18,
            top: 110,
            marginLeft: 50,
            fontFamily: 'bariol_regular-webfont',
          }}>
          edit image
        </Text>
        <View style={{flexDirection: 'column', marginLeft: 180}}>
          <Text style={styles.small}>username</Text>
          <Text style={styles.big}>jennifer smith</Text>
          <Text style={styles.small}>{'\n'}email id</Text>
          <Text style={styles.big}>jenni@qburst.com</Text>
          <Text style={styles.small}>{'\n'}mobile</Text>
          <Text style={styles.big}>+91 98950 66224</Text>
          <Text style={styles.small}>{'\n'}address</Text>
          <Text style={styles.big}>
            qburst technologies Inforpark, kakkanad kochi
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{backgroundColor: '#FFFFFF', top: 230, height: 50, margin: 0.5}}>
        <Text
          style={{
            fontFamily: 'bariol_regular-webfont',
            fontSize: 22,
            top: 8,
            marginLeft: 10,
            color: '#98817b',
          }}>
          my ads
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          top: 220,
          // paddingTop: 230,
          // flex: 1,
          backgroundColor: '#000000',
        }}>
        {arr.map((itm, indx) => (
          <View style={styles.box}>
            <View
              style={{
                width: 50,
                height: 50,
                //borderRightWidth: 0.5,
                // borderColor: '#C1C1C1',
                justifyContent: 'center',
              }}>
              <Image source={itm.img} style={{height: 55, width: 55}} />
            </View>

            <View style={{width: 260, padding: 15}}>
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
            <View>
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
  container: {
    marginLeft: 40,
    height: 150,
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 70,
    height: 70,
    top: 100,
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
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 20,
    borderColor: '#C1C1C1',
    borderWidth: 0.5,
    opacity: 0.98,
  },
});

export default App;
