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
    title: 'mobiles',
    img: require('./src/assets/images/speaker1.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'real estate',
    img: require('./src/assets/images/speaker2.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'electronics',
    img: require('./src/assets/images/speaker3.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'leisure',
    img: require('./src/assets/images/speaker4.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'appliances',
    img: require('./src/assets/images/speaker5.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'automotive',
    img: require('./src/assets/images/speaker6.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'pets',
    img: require('./src/assets/images/speaker1.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'sports',
    img: require('./src/assets/images/speaker1.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
];

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        style={{backgroundColor: '#e8e8e8'}}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingTop: 180,
        }}>
        {arr.map((itm, indx) => (
          <View style={styles.box}>
            <View>
              <Image
                source={itm.img}
                style={{marginBottom: 5, height: 165, width: 165}}
              />
            </View>
            <View
              style={{width: 290, paddingLeft: 40, backgroundColor: '#808080'}}>
              <Text
                style={{
                  color: '#000000',
                  fontFamily: 'bariol_regular-webfont',
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
    width: 168,
    height: 168,
    alignItems: 'center',
    margin: 4,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  Image: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
});

export default App;
