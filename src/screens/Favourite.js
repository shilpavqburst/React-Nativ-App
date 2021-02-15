import React, {useState} from 'react';
import SearchBar from 'react-native-dynamic-search-bar';
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
import {set} from 'react-native-reanimated';

const arr = [
  {
    title: 'puma white leather bag',
    img: require('../assets/images/bag.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
    img2: require('../assets/images/time_ICN2.png'),
    time: '\t07:30 pm',
  },

  {
    title: 'diamond ring with platinum',
    img: require('../assets/images/ring.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 13500',
    img2: require('../assets/images/time_ICN1.png'),
    time: '\t09:30 pm',
  },
  {
    title: 'ghostly enemelware mug',
    img: require('../assets/images/mug.jpg'),
    basetext: 'alzoor, karnataka',
    price: '\u20B9 75000',
    img2: require('../assets/images/time_ICN.png'),
    time: '\t10:00 pm',
  },
  {
    title: 'audio engine - xb03',
    img: require('../assets/images/speaker7.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 45000',
    img2: require('../assets/images/date_ICN1.png'),
    time: '\t28/06/16',
  },
  {
    title: 'movado circa analogue watch',
    img: require('../assets/images/watch.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 9500',
    img2: require('../assets/images/date_ICN.png'),
    time: '\t28/06/16',
  },
  {
    title: 'apple m2xc/a usb cable',
    img: require('../assets/images/headphone.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 12000',
    img2: require('../assets/images/time_ICN.png'),
    time: '\t07:00 pm',
  },
  {
    title: 'earbuds bts',
    img: require('../assets/images/earbuds.jpg'),
    basetext: 'kochi, kerala',
    price: '\u20B9 50000',
    img2: require('../assets/images/time_ICN.png'),
    time: '\t10:00 pm',
  },
];

const Favourite = () => {
  const [showSearchBar, setSearchBar] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(arr);
  const onClick = () => {
    setSearchBar(!showSearchBar);
    if (showSearchBar) {
      setSearchText('');
      setList(arr);
    }
  };

  const onSearch = (text) => {
    setSearchText(text);
    if (text === '') {
      setList(arr);
    } else {
      const temp = list.filter((itm) => {
        if (itm.title.toLowerCase().indexOf(text.toLowerCase()) > -1)
          return itm;
      });
      setList(temp);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.head}>
        <View />
        <Text
          style={{
            fontFamily: 'bariol_regular-webfont',
            fontSize: 30,
            color: 'rgba(255,121,86,1)',
            // marginLeft: 130,
            marginBottom: 12.97,
            marginTop: 33,
          }}>
          favourites
        </Text>
        <View>
          <TouchableOpacity onPress={onClick}>
            <Image
              style={{
                height: 18.03,
                width: 18.03,
                marginRight: 9.97,
                marginTop: 33,
                marginBottom: 12.97,
              }}
              source={require('../assets/images/search_lens.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      {showSearchBar && (
        <SearchBar
          style={{width: '100%'}}
          placeholder="Search.."
          value={searchText}
          onChangeText={onSearch}
        />
      )}
      <ScrollView
        style={{backgroundColor: '#e8e8e8'}}
        contentContainerStyle={{
          flexWrap: 'wrap',
        }}>
        {list.map((itm, indx) => (
          <View style={styles.box}>
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
              }}>
              <Image
                source={itm.img}
                style={{
                  height: 70,
                  width: 70,
                  marginLeft: 9,
                  paddingRight: 10,
                }}
              />
            </View>

            <View
              style={{
                //width: '70%',
                // paddingLeft: '10%',
                marginTop: 10,
                marginLeft: 40,
              }}>
              <View style={{marginTop: 8}}>
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
                <Text
                  style={{
                    color: '#FF7F50',
                    fontFamily: 'bariol_regular-webfont',
                    fontSize: 20,
                    marginBottom: 13,
                    marginTop: 10,
                  }}>
                  {itm.price}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                // marginTop: 60,
                marginBottom: 11,
                // justifyContent: 'flex-start',
                position: 'absolute',
                right: 10,
                bottom: -5,
                //marginTop: 61,
              }}>
              <Image style={{}} source={itm.img2} />
              <Text
                style={{
                  bottom: 2,
                  color: '#98817b',
                  fontFamily: 'bariol_regular-webfont',
                  fontSize: 14,
                  //bottom: 2,
                }}>
                {itm.time}
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
    width: '100%',
    height: 88,
    alignItems: 'center',
    margin: 0.5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    // padding: 10,
    borderColor: '#FFFFFF',
  },
});

export default Favourite;
