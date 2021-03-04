import React, {useState} from 'react';
import {Switch, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableNativeFeedback,
} from 'react-native';
import {FlatList} from 'react-native';
import DropComponent from '../components/DropComponent';
import {utils} from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

const itm = {
  name: '',
  loc: '',
  price: '',
  time: '',
  sellerType: '',
  category: '',
  subCategory: '',
  phone: '',
  img: [],
  negotiable: false,
  featured: false,
  desc: '',
  email: '',
  sellerName: '',
  time: '',
};

const catSelect = [
  'mobile',
  'real estate',
  'electronics',
  'leisure',
  'appliances',
  'automotive',
  'pets',
  'sports',
  'furniture',
  'entertainment',
  'instruments',
  'book/magazine',
  'fashion',
  'machinery',
  'others',
];

const subCatSelect = {
  mobile: ['samsung'],
  realestate: ['ernakulam'],
  electronics: [
    'audio players',
    'computer/laptops',
    'printers/scanners',
    'vcd/dvd players',
    'tablet/e-readers',
    'camera/camcoder',
    'speakers',
    'calculator',
    'headphones',
  ],
  leisure: ['fishing'],
  appliances: ['tv'],
  automotive: ['car'],
  pets: ['dog'],
  sports: ['cricket'],
  furniture: ['sofa'],
  entertainment: ['movie'],
  instruments: ['string'],
  bookmagazine: ['fiction'],
  fashion: ['watch'],
  machinery: ['driller'],
  others: ['household'],
};

const sellerTypeSelect = ['agent', 'self'];

const Create_Ad = ({navigation}) => {
  const [item, setItem] = useState(itm);

  const takePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      let temp = item.img;
      temp.push(image.path);
      onItemValueChange(temp, 'img');
    });
  };

  const onItemValueChange = (txt, value) => {
    const temp = item;
    temp[value] = txt;
    setItem({...temp});
  };

  const navigTo = () => {
    console.warn(item);
    if (
      (item.name == '' && item.desc == '',
      item.img.length === 0 && item.loc == '',
      item.price == '' && item.sellerName == '',
      item.sellerType == '' && item.subCategory == '',
      item.category == '' && item.phone == '',
      item.email == '')
    )
      alert('All fields are required!');
    else {
      navigation.navigate('Preview', {item});
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.head}>
        <Text
          style={{
            fontFamily: 'bariol_regular-webfont',
            fontSize: 30,
            color: 'rgba(255,121,86,1)',
            //margin: 20,
            marginTop: 28,
            marginBottom: 6,
          }}>
          create ad
        </Text>
      </View>
      <ScrollView style={styles.maincontainer}>
        <View style={styles.container}>
          <ImageBackground
            style={styles.bg}
            source={require('../assets/images/bg.png')}>
            <Text
              style={{
                color: '#98817b',
                fontSize: 18,
                marginTop: 20,
                marginLeft: 20,
                fontFamily: 'bariol_regular-webfont',
              }}>
              add photographs
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 16,
                alignItems: 'center',
                marginLeft: 22,
              }}>
              {item.img.length != 4 && (
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    height: 60,
                    width: 60,
                    backgroundColor: '#fff',
                  }}
                  onPress={takePhotoFromGallery}>
                  <Image
                    style={[styles.logo]}
                    source={require('../assets/images/addimage_icn.png')}
                  />
                </TouchableOpacity>
              )}
              {item.img.length != 0 &&
                item.img?.map((itm, indx) => (
                  <View>
                    <ImageBackground
                      key={indx}
                      style={[styles.images]}
                      source={{uri: itm}}>
                      <TouchableOpacity
                        onPress={() => {
                          console.warn('ss');
                        }}>
                        <Icon
                          name="times-circle"
                          size={15}
                          style={{
                            color: '#fff',
                            alignSelf: 'flex-end',
                          }}
                        />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>
                ))}
            </View>
          </ImageBackground>
        </View>

        <TextInput
          placeholder="product title"
          value={item.name}
          onChangeText={(text) => onItemValueChange(text, 'name')}
          style={styles.TextInputStyleClass}
        />
        <DropComponent
          list={catSelect}
          selectedValue={
            item?.category == '' ? 'select category' : item?.category
          }
          onSelectValue={(txt) => onItemValueChange(txt, 'category')}
        />

        <DropComponent
          list={subCatSelect[item?.category]}
          selectedValue={
            item?.subCategory == '' ? 'select sub-category' : item?.subCategory
          }
          onSelectValue={(txt) => onItemValueChange(txt, 'subCategory')}
        />

        <DropComponent
          list={sellerTypeSelect}
          selectedValue={
            item?.sellerType == '' ? 'select seller type' : item?.sellerType
          }
          onSelectValue={(txt) => onItemValueChange(txt, 'sellerType')}
        />

        <TextInput
          placeholder="description"
          value={item.desc}
          onChangeText={(text) => onItemValueChange(text, 'desc')}
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="price"
          style={styles.TextInputStyleClass}
          value={item.price}
          onChangeText={(text) => onItemValueChange(text, 'price')}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.TextStyleClass}>negotiable</Text>

          <Switch
            trackColor={{false: '#e8e8e8', true: '#31ea92'}}
            thumbColor={item?.negotiable ? '#FFFFFF' : '#FFFFFF'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() =>
              onItemValueChange(!item?.negotiable, 'negotiable')
            }
            value={item?.negotiable}
            style={{marginRight: 30}}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.TextStyleClass}>feature the product</Text>
          <Switch
            trackColor={{false: '#e8e8e8', true: '#31ea92'}}
            thumbColor={item?.featured ? '#FFFFFF' : '#FFFFFF'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => onItemValueChange(!item?.featured, 'featured')}
            value={item?.featured}
            style={{marginRight: 30}}
          />
        </View>
        <TextInput
          placeholder="select location"
          style={styles.TextInputStyleClass}
          value={item.loc}
          onChangeText={(text) => onItemValueChange(text, 'loc')}
        />
        <TextInput
          placeholder="contact person"
          style={styles.TextInputStyleClass}
          value={item.sellerName}
          onChangeText={(text) => onItemValueChange(text, 'sellerName')}
        />
        <TextInput
          placeholder="email id"
          style={styles.TextInputStyleClass}
          value={item.email}
          onChangeText={(text) => onItemValueChange(text, 'email')}
        />
        <TextInput
          placeholder="contact number"
          style={styles.TextInputStyleClass}
          value={item.phone}
          onChangeText={(text) => onItemValueChange(text, 'phone')}
        />
        <TouchableNativeFeedback onPress={navigTo}>
          <Text style={styles.button}>PREVIEW</Text>
        </TouchableNativeFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    // flex: 1,
  },
  container: {
    //marginLeft: 40,
    height: 150,
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
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
  logo: {
    width: 31,
    height: 27,
    marginLeft: 15,
    alignItems: 'center',
    marginRight: 14,
    marginBottom: 16,
    marginTop: 17,
  },

  maincontainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
  },

  TextInputStyleClass: {
    textAlign: 'left',
    marginBottom: 20,
    fontSize: 22,
    marginLeft: 30,
    height: 40,
    //width: wp(45),
    borderWidth: 1,
    borderColor: '#f3e6df',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    fontFamily: 'bariol_light-webfont',
    top: 20,
    marginRight: 30,
    paddingLeft: 20,
    paddingTop: 7,
    paddingBottom: 5,
    //justifyContent: 'space-between',
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
    //width: '85%',
    borderWidth: 0.1,
    top: 20,
    borderColor: '#000000',
    borderRadius: 20,
    backgroundColor: '#FF7F50',
    marginRight: 30,
    marginBottom: 43,
  },
  TextStyleClass: {
    // textAlign: 'left',
    marginBottom: 20,

    fontSize: 22,
    marginLeft: 50,
    height: 40,
    // width: '70%',

    backgroundColor: '#FFFFFF',
    fontFamily: 'bariol_light-webfont',
    top: 20,
    color: 'rgba(162,134,128,1)',
  },
  images: {
    // flexDirection: 'row',
    height: 50,
    width: 50,
    marginLeft: 20,
  },
});

export default Create_Ad;
