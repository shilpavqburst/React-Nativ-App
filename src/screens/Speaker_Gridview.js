import React from 'react';
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
    title: 'Kenwood Mini… ',
    img: require('../assets/images/speaker1.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'Devialet Phantom… ',
    img: require('../assets/images/speaker2.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'Polk Audio LSiM… ',
    img: require('../assets/images/speaker3.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'Audio Engine… ',
    img: require('../assets/images/speaker4.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'bowerswilkins…',
    img: require('../assets/images/speaker5.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'philips…',
    img: require('../assets/images/speaker6.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'Audio Engine…',
    img: require('../assets/images/speaker1.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'Audio Engine…',
    img: require('../assets/images/speaker1.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
];

const App = () => {
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
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {arr.map((itm, indx) => (
          <View style={styles.box}>
            <View>
              <ImageBackground
                source={itm.img}
                style={{
                  //marginBottom: 5,
                  // height: 185,
                  width: '100%',
                }}>
                <View
                  style={{
                    width: '100%',
                    paddingLeft: 45,
                    backgroundColor: '#1d1d1d',
                    marginTop: 145,
                    //bottom: 20,
                    //marginLeft: 5,
                    height: 40,
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'bariol_regular-webfont',
                      fontSize: 14,
                      marginLeft: -30,
                      top: 5,
                    }}>
                    {itm.title}
                  </Text>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'bariol_regular-webfont',
                      fontSize: 12,
                      marginLeft: -30,
                      top: 5,
                    }}>
                    {itm.basetext}
                  </Text>
                  <Text
                    style={{
                      color: '#FF7F50',
                      fontFamily: 'bariol_regular-webfont',
                      fontSize: 14,
                      marginLeft: 90,
                      bottom: 20,
                    }}>
                    {itm.price}
                  </Text>
                </View>
              </ImageBackground>
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
  head: {
    backgroundColor: '#FFFFFF',
    height: 70,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '47%',
    height: 185,
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
