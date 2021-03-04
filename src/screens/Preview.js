import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {ActivityIndicator} from 'react-native';

const arr = [
  {
    img: require('../assets/images/Bitmap_1.png'),
  },
  {
    img: require('../assets/images/Bitmap_2.png'),
  },
  {
    img: require('../assets/images/Bitmap_3.png'),
  },
  {
    img: require('../assets/images/Bitmap_4.png'),
  },
];
const arr1 = [
  {
    title: 'product title ',
    basetext: 'name',
  },
  {
    title: 'category ',
    basetext: 'category',
  },
  {
    title: 'sub category ',
    basetext: 'subCategory',
  },

  {
    title: 'seller type ',
    basetext: 'sellerType',
  },
  {
    title: 'description',
    basetext: 'desc',
  },
  {
    title: 'price',
    basetext: 'price',
  },
  {
    title: 'time',
    basetext: 'time',
  },
  {
    title: 'negotiable',
    basetext: 'negotiable',
  },
  {
    title: 'featured product',
    basetext: 'featured',
  },
  {
    title: 'location',
    basetext: 'loc',
  },
  {
    title: 'contact person',
    basetext: 'sellerName',
  },
  {
    title: 'email id',
    basetext: 'email',
  },
  {
    title: 'contact number',
    basetext: 'phone',
  },
  {
    title: 'image',
    basetext: 'img',
  },
];

const Preview = ({
  navigation,
  route: {
    params: {item},
  },
}) => {
  const [list, setList] = useState([]);
  const [loading, setLoader] = useState(false);
  useEffect(() => {
    const subscription = firestore()
      .collection('demo')
      .onSnapshot((usersCollection) => {
        const {data} = usersCollection.docs[0].data();
        setList(data);
      });
    return () => subscription();
  }, []);

  const onSubmit = async () => {
    setLoader(true);
    // path to existing file on filesystem
    let img = [];
    for (let i = 0; i < item.img.length; i++) {
      const pathToFile = item.img[i];
      const fileName = pathToFile.split('Pictures/')[1];
      const reference = storage().ref(fileName);
      await reference
        .putFile(pathToFile)
        .then(async () => {})
        .catch(() => {});
      const url = await storage().ref(fileName).getDownloadURL();
      img.push(url);
    }

    for (let i = 0; i < list.length; i++) {
      if (list[i].category.toLowerCase() === item.category.toLowerCase()) {
        for (let j = 0; j < list[i].subCat.length; j++) {
          if (
            list[i].subCat[j].subCatName.toLowerCase() ===
            item.subCategory.toLowerCase()
          ) {
            item.img = img;
            item.time = new Date().toLocaleDateString();
            list[i].subCat[j].items.push(item);
            firestore()
              .collection('demo')
              .doc('Dct2zlGSUdH3OdmCTtca')
              .update({data: list})
              .then(() => {
                console.warn('User updated!');
              });
          }
        }
      }
    }
    setLoader(false);
    navigation.goBack();
  };
  if (loading) {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={'green'} />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}></View>
      <ImageBackground
        style={styles.bg}
        source={require('../assets/images/bg.png')}>
        <View style={styles.head}>
          <Text
            style={{
              fontFamily: 'bariol_regular-webfont',
              fontSize: 30,
              color: 'rgba(255,121,86,1)',
              //margin: 20,
            }}>
            preview
          </Text>
        </View>
        <Text
          style={{
            color: '#98817b',
            fontSize: 18,
            top: 20,
            marginLeft: 30,
            fontFamily: 'bariol_regular-webfont',
          }}>
          add photographs
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,

            marginLeft: 20,
          }}>
          {item.img.map((itm, indx) => (
            <Image
              key={indx}
              source={{uri: itm}}
              style={{height: 50, width: 50, flexDirection: 'row', margin: 10}}
            />
          ))}
        </View>
      </ImageBackground>

      <ScrollView style={styles.maincontainer}>
        {arr1.map(
          (itm, indx) =>
            itm.title !== 'image' &&
            itm.title !== 'time' && (
              <View
                key={indx}
                style={{width: 350, padding: 15, marginLeft: 10}}>
                <Text
                  style={{
                    color: '#98817b',
                    fontFamily: 'bariol_regular-webfont',
                    fontSize: 16,
                  }}>
                  {itm.title}
                </Text>
                <Text
                  style={{
                    color: '#98817b',
                    fontFamily: 'bariol_regular-webfont',
                    fontSize: 24,
                  }}>
                  {itm.title == 'featured product' ||
                  itm.basetext == 'negotiable'
                    ? item[itm.basetext]
                      ? 'yes'
                      : 'no'
                    : item[itm.basetext]}
                </Text>
              </View>
            ),
        )}
        <TouchableOpacity onPress={onSubmit}>
          <Text style={styles.button}>PUBLISH</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 40,
    height: 150,
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  maincontainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    marginTop: 50,
  },

  button: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    fontSize: 22,
    marginLeft: 30,
    height: 40,
    width: 300,
    borderWidth: 0.1,
    top: 20,
    borderColor: '#000000',
    borderRadius: 20,
    backgroundColor: '#FF7F50',
  },
  head: {
    backgroundColor: '#FFFFFF',
    height: 70,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(232,232,232,1)',
  },

  images: {
    height: 50,
    width: 50,
    marginLeft: 20,
  },
  box: {
    width: 50,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Preview;
