import React, {useEffect, useState} from 'react';
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
  Dimensions,
  FlatList,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
const {height, width} = Dimensions.get('screen');
const arr = [
  require('../assets/images/mobile_icn.png'),
  require('../assets/images/realestate_icn.png'),
  require('../assets/images/electronics_icn.png'),
  require('../assets/images/realestate_icn.png'),
  require('../assets/images/appliances_icn.png'),
  require('../assets/images/automotive_icn.png'),
  require('../assets/images/pets_icn.png'),
  require('../assets/images/sport_icn.png'),
  require('../assets/images/furniture_icn.png'),
  require('../assets/images/entertainment_icn.png'),
  require('../assets/images/instrument_icn.png'),
  require('../assets/images/books_magazine_icn.png'),
  require('../assets/images/fashion_icn.png'),
  require('../assets/images/machenery_icn.png'),
  require('../assets/images/others_icn.png'),
];

const Dashboard = ({navigation}) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const subscription = firestore()
      .collection('demo')
      .onSnapshot((usersCollection) => {
        const {data} = usersCollection.docs[0].data();
        console.warn(data);
        setList(data);
      });
    return () => subscription();
  }, []);

  const onOpenSubCat = (index) => {
    const data = list[index].subCat;
    const catName = list[index].category;
    navigation.navigate('Electronics', {data, catName});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        source={require('../assets/images/bg.png')}
        style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}
      />
      <View style={styles.head}>
        <Text
          style={{
            fontFamily: 'bariol_regular-webfont',
            fontSize: 30,
            color: 'rgba(255,121,86,1)',
            //margin: 20,
          }}>
          dashboard
        </Text>
      </View>
      <FlatList
        data={list}
        contentContainerStyle={{
          marginTop: '2%',
          marginLeft: '2.5%',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        keyExtractor={(itm, indx) => {
          indx.toString();
        }}
        renderItem={({item, index}) => (
          <TouchableNativeFeedback onPress={() => onOpenSubCat(index)}>
            <View style={styles.box}>
              <View style={styles.img}>
                <Image source={arr[index]} />
              </View>
              <Text
                style={{
                  color: '#98817b',
                  fontFamily: 'bariol_regular-webfont',
                  fontSize: 17,
                  //width: '100%',
                  marginTop: 8,
                  alignSelf: 'center',
                }}>
                {item.category}
              </Text>
            </View>
          </TouchableNativeFeedback>
        )}
      />
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
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(232,232,232,1)',
  },
  box: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    height: 107,
    width: 107,
    marginBottom: 9,
    marginRight: 9,
    shadowColor: 'rgba(0,0,0,0.07)',
    shadowRadius: 3,
    borderWidth: 1,
    borderColor: '#fff',
  },
  img: {
    width: 41,
    height: 41,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
