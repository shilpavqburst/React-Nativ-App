import React from 'react';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,Link,scrollView,
  TextInput,
  StatusBar,Image,ImageBackground, Button, TouchableOpacity, TouchableNativeFeedback
} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';


const App= () => {
  
  return (
      <SafeAreaView style={{flex:1}}>
      <StatusBar barStyle="dark-content" />
        <View style={styles.container}>

          <ScrollView style={styles.scrollView}>
              <View style={{flexDirection: 'row',top:80}}>
                <View style={styles.box}>
                  <View style={styles.Image}/>
                    <Image source={require('./src/assets/images/mobile_icn.png')}/>
                </View>
                <View style={styles.box}>
                  <View style={styles.Image}/>
                    <Image source={require('./src/assets/images/realestate_icn.png')}/>
                </View>
                <View style={styles.box}>
                  <View style={styles.Image}/>
                    <Image source={require('./src/assets/images/electronics_icn.png')}/>
                </View>
              </View>

              <View style={{ flexDirection: 'row', top:80}}>
                <View style={styles.box}>
                  <View style={styles.Image}/>
                    <Image source={require('./src/assets/images/mobile_icn.png')}/>
                </View>
                <View style={styles.box}>
                  <View style={styles.Image}/>
                    <Image source={require('./src/assets/images/appliances_icn.png')}/>
                </View>
               <View style={styles.box}>
                  <View style={styles.Image}/>
                    <Image source={require('./src/assets/images/automotive_icn.png')}/>
               </View>
             </View>

            <View style={{flexDirection: 'row',top:80}}>
               <View style={styles.box}>
                  <View style={styles.Image}/>
                    <Image source={require('./src/assets/images/pets_icn.png')}/>
               </View>
               <View style={styles.box}>
                  <View style={styles.Image}/>
                    <Image source={require('./src/assets/images/sport_icn.png')}/>
               </View>
               <View style={styles.box}>
                  <View style={styles.Image}/>
                    <Image source={require('./src/assets/images/furniture_icn.png')}/>
               </View>
            </View>

            <View style={{flexDirection: 'row',top:80}}>
               <View style={styles.box}>
                  <View style={styles.Image}/>
                    <Image source={require('./src/assets/images/entertainment_icn.png')}/>
                </View>
               <View style={styles.box}>
                  <View style={styles.Image}/>    
                    <Image source={require('./src/assets/images/instrument_icn.png')}/>
                </View>
               <View style={styles.box}>
                  <View style={styles.Image}/>
                    <Image source={require('./src/assets/images/books_magazine_icn.png')}/>
               </View>
            </View>

            <View style={{flexDirection: 'row',top:80}}>
               <View style={styles.box}>
                  <View style={styles.Image}/>
                    <Image source={require('./src/assets/images/fashion_icn.png')}/>
                </View>
               <View style={styles.box}>
                  <View style={styles.Image}/>
                     <Image source={require('./src/assets/images/tools_machenery_icn.png')}/>
                </View>
               <View style={styles.box}>
                  <View style={styles.Image}/>
                     <Image source={require('./src/assets/images/others_icn.png')}/>
                </View>
            </View>
          </ScrollView>
    
         
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor:'#FF0000',
    
    
  },
 
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    height: '100%', 
  },
  box: {
    
    width:113,
    height:113,
    alignItems:"center",
    margin:3,
    backgroundColor:"#000000",
    
   
  },
  Image: {
    width:50,
    height:50,
    justifyContent:"center"
  },
  
  
});

export default App;


