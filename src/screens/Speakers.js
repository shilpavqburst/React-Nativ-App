import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableNativeFeedback,
} from 'react-native';

const arr = [
  {
    title: 'kenwood mini speakers',
    img: require('../assets/images/speaker1.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
    img2: require('../assets/images/time_ICN2.png'),
    time: '\t07:30 pm',
  },

  {
    title: 'devialet phantom wireless',
    img: require('../assets/images/speaker2.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 13500',
    img2: require('../assets/images/time_ICN1.png'),
    time: '\t09:30 pm',
  },
  {
    title: 'polk audio lsim 705',
    img: require('../assets/images/speaker3.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 17000',
    img2: require('../assets/images/time_ICN.png'),
    time: '\t10:00 pm',
  },
  {
    title: 'audio engine a2+',
    img: require('../assets/images/speaker4.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 45000',
    img2: require('../assets/images/date_ICN1.png'),
    time: '\t28/06/16',
  },
  {
    title: 'bowerswilkins - dm602',
    img: require('../assets/images/speaker5.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 9500',
    img2: require('../assets/images/date_ICN.png'),
    time: '\t28/06/16',
  },
  {
    title: 'philips multi speakers',
    img: require('../assets/images/speaker6.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 50000',
    img2: require('../assets/images/time_ICN.png'),
    time: '\t10:00 pm',
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
          speakers
        </Text>
      </View>

      <ScrollView
        style={{backgroundColor: '#e8e8e8'}}
        contentContainerStyle={{
          flexDirection: 'column',
          //flexWrap: 'wrap',
          // top: 50,
        }}>
        {arr.map((itm, indx) => (
          <TouchableNativeFeedback
            key={indx}
            onPress={() => {
              navigation.navigate('Audio engine');
            }}>
            <View style={styles.box}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  //borderRightWidth: 0.5,
                  //borderColor: '#C1C1C1',
                  justifyContent: 'center',
                }}>
                <Image source={itm.img} style={{height: 80, width: 80}} />
              </View>

              <View style={{width: 220, paddingLeft: 40}}>
                <Text
                  style={{
                    color: '#98817b',
                    fontFamily: 'bariol_regular-webfont',
                    fontSize: 20,
                    width: 300,
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
              <View style={{flexDirection: 'row', top: 35}}>
                <Image style={{top: 3}} source={itm.img2} />
                <Text
                  style={{
                    color: '#98817b',
                    fontFamily: 'bariol_regular-webfont',
                    fontSize: 14,
                  }}>
                  {itm.time}
                </Text>
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
    height: 100,
    alignItems: 'center',
    margin: 0.5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 10,
    borderColor: '#FFFFFF',
  },
});

export default App;
