import React from 'react';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,Link,
  TextInput,
  StatusBar,Image,ImageBackground, Button, TouchableOpacity, TouchableNativeFeedback
} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const arr=[{
  title:"mobiles",
  img:require('./src/assets/images/mobile_icn.png')},
  {
    title:"real estate",
    img:require('./src/assets/images/realestate_icn.png')},
  {
    title:"electronics",
    img:require('./src/assets/images/realestate_icn.png')},
  {
    title:"leisure",
    img:require('./src/assets/images/realestate_icn.png')},
  {
    title:"appliances",
    img:require('./src/assets/images/appliances_icn.png')},
  {
    title:"automotive",
    img:require('./src/assets/images/automotive_icn.png')},
  {
    title:"pets",
    img:require('./src/assets/images/pets_icn.png')},
  {
    title:"sports",
    img:require('./src/assets/images/sport_icn.png')},
  {
    title:"furniture",
    img:require('./src/assets/images/furniture_icn.png')},
  {
    title:"entertainment",
    img:require('./src/assets/images/entertainment_icn.png')},
  {
    title:"instruments",
    img:require('./src/assets/images/instrument_icn.png')},
  {
    title:"book/magazine",
    img:require('./src/assets/images/books_magazine_icn.png')},
  {
    title:"fashion",
    img:require('./src/assets/images/fashion_icn.png')},
  {
    title:"machenery",
    img:require('./src/assets/images/machenery_icn.png')},
  {
    title:"others",
    img:require('./src/assets/images/others_icn.png')},
               
                       
]

const App= () => {
  
  return (
      <SafeAreaView style={{flex:1}}>
       <StatusBar barStyle="dark-content" />

          <ScrollView style={{backgroundColor:'#e8e8e8'}} contentContainerStyle={{flexDirection:'row',flexWrap:'wrap', paddingTop:100}}>

        {arr.map((itm,indx)=> 
                <View style={styles.box}>
                    <Image source={itm.img} style={{marginBottom:5}}/>
                    <Text style={{color:'#98817b',fontFamily:'bariol_regular-webfont'}}>{itm.title}</Text>
                </View>
              )  
            }    
        
          </ScrollView>
          </SafeAreaView>
        
  );
};
const styles = StyleSheet.create({
  scrollView: {
  flex:1,

    
  },
 
  container: {
    flex: 1,
  },
  box: {
    width:113,
    height:113,
    alignItems:"center",
    margin:3,
    backgroundColor:"#FFFFFF",justifyContent:'center'
    
    
  },
  Image: {
    width:50,
    height:50,
   justifyContent:"center",
   
   
    
  },  
});

export default App;