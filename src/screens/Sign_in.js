import React, {useContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import PasswordInputText from 'react-native-hide-show-password-input';
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
  placeholderTextColor,
} from 'react-native';
import {Appcontext} from '../../App';

const Sign_in = ({navigation}) => {
  const {loggedIn, onLogin} = useContext(Appcontext);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const signin = () => {
    if (user !== '' && pass !== '') {
      try {
        auth()
          .signInWithEmailAndPassword(user, pass)
          .then(() => {});
      } catch (e) {
        console.warn(e);
      }
    } else {
      alert('invalid email');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo2.png')}
        />

        <TextInput
          placeholder="username"
          placeholderTextColor="rgba(162,134,128,1)"
          style={styles.TextInputStyleClass}
          onChangeText={(text) => {
            setUser(text);
          }}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(162,134,128,1)"
          style={styles.TextInputStyleClass}
          secureTextEntry
          onChangeText={(text) => {
            setPass(text);
          }}
        />

        <TouchableNativeFeedback
          onPress={() => {
            signin();
          }}>
          <Text style={styles.button}>LOGIN</Text>
        </TouchableNativeFeedback>
        <Text style={styles.fp}>forgot password?</Text>
        <Text style={styles.text}>
          don't have an account?{'\t'}
          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate('Sign up');
            }}>
            <Text style={{color: '#FF7F50'}}>register</Text>
          </TouchableNativeFeedback>
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            //width: 320,
            marginTop: 48,
            marginRight: 30,
            marginLeft: 30,
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1, height: 1, backgroundColor: '#e5e4e2'}} />
          <View>
            <Text
              style={{
                color: 'rgba(162,134,128,1)',
                fontSize: 16,
                fontFamily: 'bariol_regular-webfont',
                marginTop: -5,
              }}>
              {' '}
              or{' '}
            </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#e5e4e2'}} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            //width: '100%',
            marginTop: 42,
            justifyContent: 'space-between',
            overflow: 'hidden',
            //marginRight: 72,
            //marginLeft: 73,
            alignSelf: 'center',
            marginBottom: 44,
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    //flex: 1,
    // marginTop: 50,
  },
  logo: {
    width: 261,
    height: 52,
    marginTop: 79,
    alignSelf: 'center',
    marginLeft: 57,
    marginRight: 57,
  },
  TextInputStyleClass: {
    textAlign: 'left',
    marginBottom: -58,
    fontSize: 22,
    height: 44,
    //width: wp(80),
    borderWidth: 1,
    marginTop: 160,
    borderColor: '#f3e6df',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    fontFamily: 'bariol_light-webfont',
    marginRight: 30,
    marginLeft: 30,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingBottom: 11,
    paddingTop: 11,
    marginTop: 80,
  },
  button: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 80,
    borderRadius: 22,
    backgroundColor: '#FF7F50',
    height: 44,
    marginLeft: 30,
    marginRight: 30,
  },
  fp: {
    marginTop: 27,
    color: '#98817b',
    fontSize: 18,
    fontFamily: 'bariol_light-webfont',
    marginRight: 120,
    marginLeft: 120,
    alignSelf: 'center',
  },
  text: {
    marginTop: 36,
    color: '#98817b',
    fontSize: 18,
    fontFamily: 'bariol_light-webfont',
    marginLeft: 65,
    marginRight: 66,
    alignSelf: 'center',
  },
  facebook: {
    height: 50,
    width: 50,
    marginLeft: 73,
  },
  twitter: {
    height: 50,
    width: 50,
    marginLeft: 40,
    marginRight: 40,
  },
  google: {
    height: 50,
    width: 50,
    marginRight: 72,
  },
});

export default Sign_in;
