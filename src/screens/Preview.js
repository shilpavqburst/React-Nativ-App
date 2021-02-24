import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';

const arr = [
  {
    img: require('../assets/images/Bitmap_1.png'),
  },
  {
    img: require('../assets/images/Bitmap_2.png'),
  },
  {
    img: require('../assets/images/Bitmap_3.png'),
  },
  {
    img: require('../assets/images/Bitmap_4.png'),
  },
];
const arr1 = [
  {
    title: 'product title ',
    basetext: 'audio engine a2+ speakers ',
  },
  {
    title: 'category ',
    basetext: 'electronics ',
  },
  {
    title: 'seller type ',
    basetext: 'agent',
  },
  {
    title: 'description',
    basetext: 'audioengine speakers with superb sound imaging and quality',
  },
  {
    title: 'price',
    basetext: '45,000',
  },
  {
    title: 'negotiable ',
    basetext: 'yes',
  },
  {
    title: 'featured product',
    basetext: 'no',
  },
  {
    title: 'location',
    basetext: 'kochi, kerala',
  },
  {
    title: 'contact person',
    basetext: 'mahesh sivasankaran',
  },
  {
    title: 'email id',
    basetext: 'maheshs@qburst.com',
  },
  {
    title: 'contact number',
    basetext: '+91 9895066224',
  },
];

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}></View>
      <ImageBackground
        style={styles.bg}
        source={require('../assets/images/bg.png')}>
        <View style={styles.head}>
          <Text
            style={{
              fontFamily: 'bariol_regular-webfont',
              fontSize: 30,
              color: 'rgba(255,121,86,1)',
              //margin: 20,
            }}>
            preview
          </Text>
        </View>
        <Text
          style={{
            color: '#98817b',
            fontSize: 18,
            top: 20,
            marginLeft: 30,
            fontFamily: 'bariol_regular-webfont',
          }}>
          add photographs
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,

            marginLeft: 20,
          }}>
          {arr.map((itm) => (
            <Image
              source={itm.img}
              style={{height: 50, width: 50, flexDirection: 'row', margin: 10}}
            />
          ))}
        </View>
      </ImageBackground>

      <ScrollView style={styles.maincontainer}>
        {arr1.map((itm) => (
          <View style={{width: 350, padding: 15, marginLeft: 10}}>
            <Text
              style={{
                color: '#98817b',
                fontFamily: 'bariol_regular-webfont',
                fontSize: 16,
              }}>
              {itm.title}
            </Text>
            <Text
              style={{
                color: '#98817b',
                fontFamily: 'bariol_regular-webfont',
                fontSize: 24,
              }}>
              {itm.basetext}
            </Text>
          </View>
        ))}
        <TouchableOpacity>
          <Text style={styles.button}>PUBLISH</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 40,
    height: 150,
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  maincontainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    marginTop: 50,
  },

  button: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    fontSize: 22,
    marginLeft: 30,
    height: 40,
    width: 300,
    borderWidth: 0.1,
    top: 20,
    borderColor: '#000000',
    borderRadius: 20,
    backgroundColor: '#FF7F50',
  },
  head: {
    backgroundColor: '#FFFFFF',
    height: 70,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(232,232,232,1)',
  },

  images: {
    height: 50,
    width: 50,
    marginLeft: 20,
  },
  box: {
    width: 50,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default App;
