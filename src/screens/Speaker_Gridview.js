import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
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

const App = ({navigation}) => {
  const [country, setCountry] = useState('ernakulam');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.head}>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={{
              height: 18,
              width: 10,
              marginLeft: '3%',
              marginTop: 33,
              marginBottom: 12.97,
            }}
            source={require('../assets/images/titlebar_back_arrow.png')}></Image>
        </TouchableNativeFeedback>
        <Text
          style={{
            fontFamily: 'bariol_regular-webfont',
            fontSize: 30,
            color: 'rgba(255,121,86,1)',
            marginTop: 33,
            marginBottom: 12.97,
          }}>
          speakers
        </Text>
        <View>
          <Image
            style={{
              height: 19,
              width: 19,
              marginRight: '3%',
              marginTop: 33,
              marginBottom: 12.97,
            }}
            source={require('../assets/images/search_lens.png')}></Image>
        </View>
      </View>
      <ScrollView
        style={{backgroundColor: '#e8e8e8'}}
        contentContainerStyle={{
          flexDirection: 'column',
          //flexWrap: 'wrap',
        }}>
        <View
          style={{
            paddingVertical: 5,
            backgroundColor: 'rgba(248,248,248,1)',
            // flexDirection: 'row',
            justifyContent: 'center',
            zIndex: 10,
            borderBottomWidth: 1,
            borderColor: 'rgba(231,231,231,1)',
            height: 50,
          }}>
          <DropDownPicker
            items={[
              {
                label: 'ernakulam',
                value: 'ernakulam',
                //hidden: true,
              },
              {
                label: 'trivandrum',
                value: 'trivandrum',
              },
              {
                label: 'thrissur',
                value: 'thrissur',
              },
            ]}
            defaultValue={country}
            style={{
              backgroundColor: 'rgba(248,248,248,1)',
              borderWidth: 0,
              width: 120,
            }}
            containerStyle={{zIndex: 20, position: 'absolute'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            globalTextStyle={{
              fontSize: 18,
              fontFamily: 'bariol_regular-webfont',
              color: 'rgba(162,134,128,1)',
              //left: -15,
            }}
            selectedLabelStyle={{marginLeft: -1}}
            dropDownStyle={{
              backgroundColor: '#fafafa',
            }}
            onOpen={() => {}}
            onClose={() => {}}
            customArrowDown={(size) => (
              <Icon name="caret-down" size={15} style={{top: 2}} />
            )}
            onChangeItem={(item) => setCountry(item.value)}
          />
          <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
            <Image
              style={{
                height: 21,
                width: 21,
                //alignSelf: 'flex-end',
                marginRight: 20,
                marginTop: 15,
                marginBottom: 15,
              }}
              source={require('../assets/images/filter_icn.png')}
            />
            <TouchableNativeFeedback
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  //alignSelf: 'flex-end',
                  // alignItems: 'center',
                  //justifyContent: 'center',
                  marginRight: 10,
                  marginTop: 15,
                  marginBottom: 15,
                }}
                source={require('../assets/images/listview_icn.png')}
              />
            </TouchableNativeFeedback>
          </View>
        </View>
        <ImageBackground
          style={{height: '100%', width: '100%'}}
          source={require('../assets/images/bg.png')}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              top: 15,
            }}>
            {arr.map((itm, indx) => (
              <View style={styles.box}>
                <View>
                  <ImageBackground
                    source={itm.img}
                    style={
                      {
                        //marginBottom: 5,
                        // height: 185,
                        // width: '100%',
                      }
                    }>
                    <View
                      style={{
                        //width: '100%',
                        paddingLeft: 45,
                        backgroundColor: '#1d1d1d',
                        marginTop: 145,
                        //bottom: 20,
                        //marginLeft: 5,
                        height: 40,
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          color: '#FFFFFF',
                          fontFamily: 'bariol_regular-webfont',
                          fontSize: 14,
                          marginLeft: -40,
                          top: 6,
                        }}>
                        {itm.title}
                      </Text>
                      <Text
                        style={{
                          color: '#FFFFFF',
                          fontFamily: 'bariol_regular-webfont',
                          fontSize: 12,
                          marginLeft: -40,
                          top: 7,
                        }}>
                        {itm.basetext}
                      </Text>

                      <Text
                        style={{
                          color: '#FF7F50',
                          fontFamily: 'bariol_regular-webfont',
                          fontSize: 14,
                          marginLeft: 75,
                          bottom: 15,
                          right: 5,
                        }}>
                        {itm.price}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            ))}
          </View>
        </ImageBackground>
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
    height: 64,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'rgba(232,232,232,1)',
  },
  box: {
    width: 174,
    height: 174,
    alignItems: 'center',
    //margin: 9,
    //backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    marginBottom: 20,
  },
  Image: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
});

export default App;
