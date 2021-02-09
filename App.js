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
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />

      <Swiper contentContainerStyle={{height: 50}}>
        <View style={styles.slideContainer}>
          <Image
            style={styles.image}
            source={require('./src/assets/images/speaker2.jpg')}
          />
          <Text>Slide 1</Text>
        </View>
        <View style={styles.slideContainer}>
          <Text>Slide 2</Text>
          <Image
            style={styles.image}
            source={require('./src/assets/images/speaker3.jpg')}
          />
        </View>
        <View style={styles.slideContainer}>
          <Text>Slide 3</Text>
          <Image
            style={styles.image}
            source={require('./src/assets/images/speaker7.jpg')}
          />
        </View>
        <View style={styles.slideContainer}>
          <Text>Slide 3</Text>
          <Image
            style={styles.image}
            source={require('./src/assets/images/speaker8.jpg')}
          />
        </View>
      </Swiper>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Swiper: {
    height: 300,
    width: '100%',
  },
  slideContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '100%',
    backgroundColor: '#000000',
  },
  image: {
    height: 200,
    width: '100%',
  },
  /*} slide: {
    backgroundColor: 'rgba(20,20,200,0.3)',
    height: 10,
    width: '100%',
  },*/
});

export default App;
