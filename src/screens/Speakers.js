import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
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

const App = ({
  navigation,
  route: {
    params: {data, subCatName},
  },
}) => {
  const [country, setCountry] = useState('ernakulam');

  const [showSearchBar, setSearchBar] = useState(false);
  const [grid, setGrid] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(arr);
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
          {subCatName}
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
        style={{backgroundColor: '#e8e8e8'}}
        contentContainerStyle={{
          flexDirection: 'column',
          //flexWrap: 'wrap',
          // top: 50,
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
                setGrid(!grid);
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
                source={require('../assets/images/gridview_icn.png')}
              />
            </TouchableNativeFeedback>
          </View>
        </View>
        <ImageBackground
          style={{height: '100%', width: '100%'}}
          source={require('../assets/images/bg.png')}>
          {list.length !== 0 &&
            list.map((itm, indx) => (
              <TouchableNativeFeedback
                key={indx}
                onPress={() => {
                  navigation.navigate('Audio engine');
                }}>
                <View style={grid ? styles.gridbox : styles.box}>
                  <View
                    style={{
                      marginLeft: 9,
                      marginBottom: 9,
                      marginTop: 9,
                      zIndex: 1,
                    }}>
                    <Image source={itm.img} style={{height: 70, width: 70}} />
                  </View>

                  <View style={grid ? styles.gridtext : styles.listtext}>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          color: '#98817b',
                          fontFamily: 'bariol_regular-webfont',
                          fontSize: 20,
                          // width: 300,
                          //marginTop: 10,
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
                    <Text
                      style={{
                        color: '#FF7F50',
                        fontFamily: 'bariol_regular-webfont',
                        fontSize: 20,
                        marginTop: 10,
                        marginBottom: 13,
                      }}>
                      {itm.price}
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
                      style={{height: 10.57, width: 10.57}}
                      source={itm.img2}
                    />
                    <Text
                      style={{
                        color: '#98817b',
                        fontFamily: 'bariol_regular-webfont',
                        fontSize: 14,
                        marginRight: 10,
                        // marginLeft: 2,
                        bottom: 2,
                      }}>
                      {itm.time}
                    </Text>
                  </View>
                </View>
              </TouchableNativeFeedback>
            ))}
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
    //margin: 9,
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

export default App;
