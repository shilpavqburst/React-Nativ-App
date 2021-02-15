import React from 'react';
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

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View>
          <Image
            style={styles.logo}
            source={require('../assets/images/uploadimg.png')}
          />
        </View>
        <Text
          style={{
            color: '#98817b',
            fontSize: 22,
            top: 60,
            fontFamily: 'bariol_light-webfont',
          }}>
          upload image
        </Text>

        <TextInput placeholder="username" style={styles.TextInputStyleClass} />
        <TextInput placeholder="email id" style={styles.TextInputStyleClass} />
        <TextInput
          placeholder="mobile number"
          style={styles.TextInputStyleClass}
        />
        <TextInput placeholder="address" style={styles.TextInputStyleClass} />
        <TextInput placeholder="password" style={styles.TextInputStyleClass} />
        <TextInput
          placeholder="confirm password"
          style={styles.TextInputStyleClass}
        />
        <Text style={styles.button}>REGISTER</Text>
        <Text style={styles.text}>
          don't have an account?{'\t'}
          {'\t'}
          <Text style={{color: '#FF7F50'}}>register</Text>
        </Text>
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
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 75,
    height: 75,
    top: 50,
    alignItems: 'center',
  },
  TextInputStyleClass: {
    textAlign: 'left',
    marginBottom: 20,
    fontSize: 22,
    height: 40,
    width: 330,
    borderWidth: 1,
    top: 90,
    borderColor: '#f3e6df',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    fontFamily: 'bariol_light-webfont',
  },
  button: {
    fontFamily: 'bariol_light-webfont',
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    height: 50,
    width: 330,
    top: 100,
    borderRadius: 22,
    backgroundColor: '#FF7F50',
  },
  text: {
    top: 120,
    color: '#98817b',
    fontSize: 22,
    fontFamily: 'bariol_light-webfont',
  },
});

export default App;
