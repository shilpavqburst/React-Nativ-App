import React, {useEffect, useState} from 'react';
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

const arr = [
  require('../assets/images/audio_icn.png'),
  require('../assets/images/computer_laptop_icn.png'),
  require('../assets/images/printer_icn.png'),
  require('../assets/images/vcd_icn.png'),
  require('../assets/images/tablet_icn.png'),
  require('../assets/images/camera_icn.png'),
  require('../assets/images/speaker_icn.png'),
  require('../assets/images/calc_icn.png'),
  require('../assets/images/headphones_icn.png'),
];

const App = ({
  navigation,
  route: {
    params: {data, catName},
  },
}) => {
  const [showSearchBar, setSearchBar] = useState(false);
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
        if (itm.subCatName.toLowerCase().indexOf(text.toLowerCase()) > -1)
          return itm;
      });
      setList(temp);
    }
  };
  const onOpenitems = (index) => {
    const data = list[index].items;
    const subCatName = list[index].subCatName;
    navigation.navigate('Speakers', {data, subCatName});
  };

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
              marginLeft: 10,
              marginBottom: 13,
              marginTop: 33,
            }}
            source={require('../assets/images/titlebar_back_arrow.png')}></Image>
        </TouchableNativeFeedback>
        <Text
          style={{
            fontFamily: 'bariol_regular-webfont',
            fontSize: 30,
            color: 'rgba(255,121,86,1)',
            marginBottom: 12,
            marginTop: 33,
          }}>
          {catName}
        </Text>
        <View>
          <TouchableOpacity onPress={onClick}>
            <Image
              style={{
                height: 19,
                width: 19,
                marginRight: 9,
                marginTop: 33,
                marginBottom: 12,
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
          flexWrap: 'wrap',
        }}>
        {list.map((itm, indx) => (
          <TouchableNativeFeedback onPress={() => onOpenitems(indx)}>
            <View style={styles.box}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRightWidth: 0.5,
                    borderColor: 'rgba(242,242,242,1)',
                    justifyContent: 'center',
                  }}>
                  <Image source={arr[indx]} style={{}} />
                </View>
                <View style={{width: 200, padding: 15}}>
                  <Text
                    style={{
                      color: '#98817b',
                      fontFamily: 'bariol_regular-webfont',
                      fontSize: 20,
                    }}>
                    {itm.subCatName}
                  </Text>
                  <Text
                    style={{
                      color: '#98817b',
                      fontFamily: 'bariol_regular-webfont',
                      fontSize: 14,
                    }}>
                    {itm.items.length} items
                  </Text>
                </View>
              </View>
              <View style={{}}>
                <Image source={require('../assets/images/listarrow_icn.png')} />
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
    height: 64,
    width: '100%',
    alignItems: 'center',
    //justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'rgba(232,232,232,1)',
  },
  box: {
    width: '100%',
    height: 65,
    alignItems: 'center',
    margin: 0.5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 20,
    borderColor: '#FFFFFF',
    justifyContent: 'flex-start',
    // alignSelf: 'flex-end',
    marginRight: 20,
    justifyContent: 'space-between',
  },
});

export default App;
