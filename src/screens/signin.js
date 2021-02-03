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


const App= () => {
  
  return (
      <SafeAreaView style={{flex:1}}>
      <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          
          <View >
            <Image style = {styles.logo} source = {require('./src/assets/images/logo2.png')} />
         </View>
         <TextInput placeholder='username'  style={styles.TextInputStyleClass}/>
         <TextInput placeholder='password'  style={styles.TextInputStyleClass}/>
   <TouchableOpacity onPress={()=>{
     console.warn('sss');
   }}>
   <View>
         <Text style={styles.button}>LOGIN</Text>
         </View>
   </TouchableOpacity>
         <Text style={styles.fp}>forgot password?</Text>
         <Text style={styles.text}>don't have an account?{"\t"}{"\t"}
           <Text style={{color:'#FF7F50'}}>register</Text>
         </Text> 
         <View style={{flexDirection: 'row',alignItems:'center', width:320, top: 250}}>
           <View style={{flex:1,height:1,backgroundColor:"#e5e4e2"}}/>
           <View>
           <Text style={{color:'#98817b'}}> or </Text>
           </View>
           <View style={{flex:1,height:1,backgroundColor:"#e5e4e2"}}/>
         </View>
        
         
          <View style={{flexDirection: 'row',width:"80%",top:300, justifyContent: 'space-between',overflow:'hidden'}}>
          <TouchableOpacity onPress={
           ()=>{
             console.warn('ss');
          //   LoginManager.logInWithPermissions(["public_profile"]).then(
          //     function(result) {
          //       if (result.isCancelled) {
          //         console.log("Login cancelled");
          //       } else {
          //         console.log(
          //           "Login success with permissions: " +
          //             result.grantedPermissions.toString()
          //         );
          //       }
          //     },
          //     function(error) {
          //       console.log("Login fail with error: " + error);
          //     }
          //   );
           }
         }
        ><Image style={[styles.facebook ,{overflow:'hidden'}]} source = {require ('./src/assets/images/facebook.png')}/>
          
          </TouchableOpacity>
          <View style={{flexDirection:'column'}}><Image style={styles.twitter } source = {require ('./src/assets/images/twitter.png')}/>
          </View>
          <View style={{flexDirection:'column'}}><Image style={styles.google} source = {require ('./src/assets/images/google.png')}/>
          </View>
         
        
         </View>
        </View>

      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor:'#fff',
  },
 
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
    
  },
  logo: {
    
    width: 310,
    height: 64,
    top: 79,
    //justifyContent: 'top',
    //alignItems :'center',
    
  },
  TextInputStyleClass: {
    textAlign: 'left',
    marginBottom : 25,
    fontSize :22,
    height:50,
    width: 330,
    borderWidth: 0.1,
    top : 160,
    borderColor:'#000000',
    borderRadius : 20,
    backgroundColor : "#FFFFFF"
  },
  button: {
    fontSize : 20,
    
    color: '#FFFFFF',
    textAlign :'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    height:50,
    width: 330,
    borderWidth: 0.25,
    top : 160,
    borderColor:'#000000',
    borderRadius : 22,
    backgroundColor : "#FF7F50"
  },
  fp :{
     top :180,
     color : '#98817b',
     fontSize: 18,
     
  },
  text :{
    top :210,
    color : '#98817b',
    fontSize: 18, 
 },
 facebook: {
   height : 50,
   width: 50,
 },
 twitter: {
  height : 50,
  width: 50,

},
google: {
  height : 50,
  width: 50,
 
}
  
});

export default App;




