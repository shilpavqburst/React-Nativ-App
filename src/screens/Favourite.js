import React, {useEffect, useState} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from 'react-native-dynamic-search-bar';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Favourites = ({navigation}) => {
  const [data, setFavList] = useState([]);
  useEffect(() => {
    const subscription = firestore()
      .collection('fav')
      .onSnapshot((usersCollection) => {
        const {data} = usersCollection.docs[0].data();
        // console.warn(data);
        setFavList(data);
        setList(data);
      });
    return () => subscription();
  }, []);
  const [showSearchBar, setSearchBar] = useState(false);
  const [grid, setGrid] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(data);
  const onClick = () => {
    setSearchBar(!showSearchBar);
    if (showSearchBar) {
      setSearchText('');
      setList(data);
    }
  };

  const onSearch = (text) => {
    setSearchText(text);
    if (text === '') {
      setList(data);
    } else {
      const temp = list.filter((itm) => {
        if (itm?.name?.toLowerCase().indexOf(text?.toLowerCase()) > -1)
          return itm;
      });
      setList(temp);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Image
        style={{
          height: '100%',
          width: '100%',
          zIndex: -10,
          position: 'absolute',
        }}
        source={require('../assets/images/bg.png')}
      />

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
          Favourites
        </Text>
        <View>
          <TouchableOpacity onPress={onClick}>
            <Image
              style={{
                height: 19,
                width: 19,
                marginRight: '3%',
                marginTop: 33,
                marginBottom: 12.97,
              }}
              source={require('../assets/images/search_lens.png')}></Image>
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
        // style={{backgroundColor: '#e8e8e8'}}
        contentContainerStyle={{
          flexDirection: 'column',
          //flexWrap: 'wrap',
          // top: 50,
        }}>
        {list.length !== 0 ? (
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
            }}>
            {list.map((itm, indx) => (
              <TouchableNativeFeedback
                key={indx}
                onPress={() => {
                  navigation.navigate('Audio engine', {data: itm});
                }}>
                <View style={styles.box}>
                  <View
                    style={{
                      marginLeft: 9,
                      marginBottom: 9,
                      marginTop: 9,
                      zIndex: 1,
                    }}>
                    <Image
                      source={{uri: itm.img[0]}}
                      style={{height: 70, width: 70}}
                    />
                  </View>

                  <View style={styles.listtext}>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          color: '#98817b',
                          fontFamily: 'bariol_regular-webfont',
                          fontSize: 20,
                          // width: 300,
                          //marginTop: 10,
                        }}>
                        {itm.name}
                      </Text>
                      <Text
                        style={{
                          color: '#98817b',
                          fontFamily: 'bariol_regular-webfont',
                          fontSize: 16,
                          top: 1,
                        }}>
                        {itm.loc}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: '#FF7F50',
                        fontFamily: 'bariol_regular-webfont',
                        fontSize: 20,
                        marginTop: 8,
                        marginBottom: 13,
                      }}>
                      ₹ {itm.price}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: 11,
                      //marginRight: 10,
                      position: 'absolute',
                      right: 10,
                      bottom: 0,
                    }}>
                    <Image
                      style={{height: 10.57, width: 10.57, right: 2}}
                      source={require('../assets/images/date_ICN.png')}
                    />
                    <Text
                      style={{
                        color: '#98817b',
                        fontFamily: 'bariol_regular-webfont',
                        fontSize: 14,
                        marginRight: 10,
                        marginLeft: 2,
                        bottom: 2,
                      }}>
                      {itm?.time}
                    </Text>
                  </View>
                </View>
              </TouchableNativeFeedback>
            ))}
          </View>
        ) : (
          <View
            style={{
              height: Dimensions.get('window').height,
              width: Dimensions.get('window').width,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{marginBottom: 200}}>no content available.</Text>
          </View>
        )}
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
    zIndex: 1,
  },

  gridbox: {
    width: 174,
    height: 174,
    alignItems: 'center',
    marginTop: 15,
    //backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    marginBottom: 20,
  },
  listtext: {marginLeft: 10},
  gridtext: {
    paddingLeft: 45,
    backgroundColor: '#1d1d1d',
    marginTop: 145,
    height: 40,
    justifyContent: 'space-between',
  },
});

export default Favourites;
