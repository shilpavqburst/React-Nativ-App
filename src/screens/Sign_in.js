import React, {useContext, useEffect, useState} from 'react';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
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
import {Appcontext} from '../../App';

const Sign_in = () => {
  const {loggedIn, onLogin} = useContext(Appcontext);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View>
          <Image
            style={styles.logo}
            source={require('../assets/images/logo2.png')}
          />
        </View>
        <View>
          <TextInput
            placeholder="username"
            style={styles.TextInputStyleClass}
            onChangeText={(text) => {
              setUser(text);
            }}
          />
          <TextInput
            placeholder="password"
            style={styles.TextInputStyleClass}
            onChangeText={(text) => {
              setPass(text);
            }}
          />
        </View>
        <TouchableNativeFeedback
          onPress={() => {
            if (user === 'shilpa' && pass == 'shilpa') onLogin(true);
            else alert('invalid username or password');
          }}>
          <Text style={styles.button}>LOGIN</Text>
        </TouchableNativeFeedback>
        <Text style={styles.fp}>forgot password?</Text>
        <Text style={styles.text}>
          don't have an account?{'\t'}
          {'\t'}
          <Text style={{color: '#FF7F50'}}>register</Text>
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: 320,
            top: 250,
          }}>
          <View style={{flex: 1, height: 1, backgroundColor: '#e5e4e2'}} />
          <View>
            <Text style={{color: '#98817b'}}> or </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#e5e4e2'}} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            top: 300,
            justifyContent: 'space-between',
            overflow: 'hidden',
          }}>
          <TouchableOpacity
            onPress={() => {
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
            }}>
            <Image
              style={[styles.facebook, {overflow: 'hidden'}]}
              source={require('../assets/images/facebook.png')}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'column'}}>
            <Image
              style={styles.twitter}
              source={require('../assets/images/twitter.png')}
            />
          </View>
          <View style={{flexDirection: 'column'}}>
            <Image
              style={styles.google}
              source={require('../assets/images/google.png')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
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
    marginBottom: 25,
    fontSize: 22,
    height: 50,
    width: 330,
    borderWidth: 1,
    top: 160,
    borderColor: '#f3e6df',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    fontFamily: 'bariol_light-webfont',
  },
  button: {
    fontSize: 20,

    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: 330,

    top: 160,

    borderRadius: 22,
    backgroundColor: '#FF7F50',
  },
  fp: {
    top: 180,
    color: '#98817b',
    fontSize: 20,
    fontFamily: 'bariol_light-webfont',
  },
  text: {
    top: 210,
    color: '#98817b',
    fontSize: 20,
    fontFamily: 'bariol_light-webfont',
  },
  facebook: {
    height: 50,
    width: 50,
  },
  twitter: {
    height: 50,
    width: 50,
  },
  google: {
    height: 50,
    width: 50,
  },
});

export default Sign_in;
