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
    img: require('./src/assets/images/speaker1.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'Devialet Phantom… ',
    img: require('./src/assets/images/speaker2.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'Polk Audio LSiM… ',
    img: require('./src/assets/images/speaker3.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'Audio Engine… ',
    img: require('./src/assets/images/speaker4.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'bowerswilkins…',
    img: require('./src/assets/images/speaker5.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'philips…',
    img: require('./src/assets/images/speaker6.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'Audio Engine…',
    img: require('./src/assets/images/speaker1.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
  },
  {
    title: 'Audio Engine…',
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
