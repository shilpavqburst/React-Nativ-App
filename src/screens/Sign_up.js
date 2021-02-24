import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  placeholderTextColor,
} from 'react-native';

const App = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('Sign in');
          }}>
          <Image
            style={{height: 18, width: 10, marginTop: 13, marginLeft: 13}}
            source={require('../assets/images/titlebar_back_arrow.png')}></Image>
        </TouchableNativeFeedback>
        <Image
          style={styles.logo}
          source={require('../assets/images/uploadimg.png')}
        />

        <Text
          style={{
            color: '#98817b',
            fontSize: 18,
            marginTop: 9,
            fontFamily: 'bariol_light-webfont',
            //marginRight: 139.5,
            //marginLeft: 139.5,
            //width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          upload image
        </Text>

        <TextInput
          placeholder="username"
          placeholderTextColor="rgba(162,134,128,1)"
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="email id"
          placeholderTextColor="rgba(162,134,128,1)"
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="mobile number"
          placeholderTextColor="rgba(162,134,128,1)"
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="address"
          placeholderTextColor="rgba(162,134,128,1)"
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(162,134,128,1)"
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="confirm password"
          placeholderTextColor="rgba(162,134,128,1)"
          style={styles.TextInputStyleClass}
        />
        <Text style={styles.button}>REGISTER</Text>
        <Text style={styles.text}>
          already have an account?{'\t'}
          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate('Sign in');
            }}>
            <Text style={{color: '#FF7F50'}}>login</Text>
          </TouchableNativeFeedback>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //alignItems: 'center',
    //flexDirection: 'column',
    //justifyContent: 'space-around',
    // width: '100%',
    //height: '100%',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 75,
    height: 75,
    marginTop: 12,
    alignSelf: 'center',
    marginLeft: 150,
    marginRight: 150,
  },
  TextInputStyleClass: {
    textAlign: 'left',
    marginBottom: -24,
    fontSize: 22,
    height: 44,
    //width: wp(80),
    borderWidth: 1,
    marginTop: 42,
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
  },
  button: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 41,
    borderRadius: 22,
    backgroundColor: '#FF7F50',
    height: 44,
    marginLeft: 30,
    marginRight: 30,
  },
  text: {
    marginTop: 50,
    color: '#98817b',
    fontSize: 18,
    fontFamily: 'bariol_light-webfont',
    marginLeft: 79,
    marginRight: 79,
    width: 217,
    alignSelf: 'center',
  },
});

export default App;
