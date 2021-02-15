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
    title: 'audio players',
    img: require('../assets/images/audio_icn.png'),
    basetext: '75 items',
    img2: require('../assets/images/listarrow_icn.png'),
  },

  {
    title: 'computer/laptops',
    img: require('../assets/images/computer_laptop_icn.png'),
    basetext: '75 items',
    img2: require('../assets/images/listarrow_icn.png'),
  },
  {
    title: 'printers/scanners',
    img: require('../assets/images/printer_icn.png'),
    basetext: '75 items',
    img2: require('../assets/images/listarrow_icn.png'),
  },
  {
    title: 'vcd/dvd players',
    img: require('../assets/images/vcd_icn.png'),
    basetext: '75 items',
    img2: require('../assets/images/listarrow_icn.png'),
  },
  {
    title: 'tablet/e-readers',
    img: require('../assets/images/tablet_icn.png'),
    basetext: '75 items',
    img2: require('../assets/images/listarrow_icn.png'),
  },
  {
    title: 'camera/camcoder',
    img: require('../assets/images/camera_icn.png'),
    basetext: '75 items',
    img2: require('../assets/images/listarrow_icn.png'),
  },
  {
    title: 'speakers',
    img: require('../assets/images/speaker_icn.png'),
    basetext: '75 items',
    img2: require('../assets/images/listarrow_icn.png'),
  },
  {
    title: 'calculator',
    img: require('../assets/images/calc_icn.png'),
    basetext: '75 items',
    img2: require('../assets/images/listarrow_icn.png'),
  },
  {
    title: 'headphones',
    img: require('../assets/images/headphones_icn.png'),
    basetext: '75 items',
    img2: require('../assets/images/listarrow_icn.png'),
  },
];

const App = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.head}>
        <Text
          style={{
            fontFamily: 'bariol_regular-webfont',
            fontSize: 30,
            color: 'rgba(255,121,86,1)',
            //margin: 20,
          }}>
          electronics
        </Text>
      </View>

      <ScrollView
        style={{backgroundColor: '#e8e8e8'}}
        contentContainerStyle={{
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}>
        {arr.map((itm, indx) => (
          <TouchableNativeFeedback
            key={indx}
            onPress={() => {
              navigation.navigate('Speakers');
            }}>
            <View style={styles.box}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRightWidth: 0.5,
                  borderColor: '#C1C1C1',
                  justifyContent: 'center',
                }}>
                <Image source={itm.img} style={{}} />
              </View>

              <View style={{width: 290, padding: 15}}>
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
          </TouchableNativeFeedback>
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
  head: {
    backgroundColor: '#FFFFFF',
    height: 70,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '100%',
    height: 65,
    alignItems: 'center',
    margin: 0.5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 20,
    borderColor: '#FFFFFF',
  },
});

export default App;
