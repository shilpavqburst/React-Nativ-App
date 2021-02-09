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
    title: 'Sandra Adams',
    img: require('./src/assets/images/avatar1.png'),
    basetext: "Can't wait to see you!",
  },

  {
    title: 'Andrew Jill',
    img: require('./src/assets/images/avatar2.png'),
    basetext: "Can't wait to see you!",
  },
  {
    title: 'Ria Shah',
    img: require('./src/assets/images/avatar3.png'),
    basetext: "Can't wait to see you!",
  },
  {
    title: 'Andrew Jill',
    img: require('./src/assets/images/avatar4.png'),
    basetext: "Can't wait to see you!",
  },
  {
    title: 'Jimmy James',
    img: require('./src/assets/images/avatar5.png'),
    basetext: "Can't wait to see you!",
  },
  {
    title: 'Sara Toole',
    img: require('./src/assets/images/avatar6.png'),
    basetext: "Can't wait to see you!",
  },
];

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        style={{backgroundColor: '#e8e8e8'}}
        contentContainerStyle={{
          flexDirection: 'column',
          flexWrap: 'wrap',
          paddingTop: 100,
        }}>
        {arr.map((itm, indx) => (
          <View style={styles.box}>
            <View
              style={{
                width: 50,
                height: 50,
                //borderRightWidth: 0.5,
                //borderColor: '#C1C1C1',
                justifyContent: 'center',
              }}>
              <Image source={itm.img} style={{height: 50, width: 50}} />
            </View>

            <View style={{width: 290, paddingLeft: 15}}>
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
                  fontFamily: 'bariol_light-webfont',
                  fontSize: 14,
                }}>
                {itm.basetext}
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
    width: '100%',
    height: 70,
    alignItems: 'center',
    margin: 0.5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 10,
    borderColor: '#FFFFFF',
  },
});

export default App;
