import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  ImageBackground,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const App = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const onSignup = () => {
    if (email !== '' && pass !== '') {
      try {
        auth()
          .createUserWithEmailAndPassword(email, pass)
          .then(() => {
            navigation.pop();
          });
      } catch (e) {
        console.warn(e);
      }
    } else {
      alert('invalid email');
    }
  };

  const [imageSRC, setImageSRC] = useState(null);

  const takePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setImageSRC(image.path);
      console.warn(image.path);
    });
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={{height: 18, width: 10, marginTop: 13, marginLeft: 13}}
            source={require('../assets/images/titlebar_back_arrow.png')}></Image>
        </TouchableNativeFeedback>
        <View>
          {!imageSRC ? (
            <TouchableOpacity onPress={takePhotoFromGallery}>
              <Image
                style={styles.logo}
                source={require('../assets/images/uploadimg.png')}
              />
            </TouchableOpacity>
          ) : (
            <View>
              <ImageBackground style={[styles.images]} source={{uri: imageSRC}}>
                <TouchableOpacity
                  onPress={() => {
                    setImageSRC(null);
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
          )}
        </View>

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
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
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
          // onChange={()=>}
        />
        <TextInput
          placeholder="password"
          value={pass}
          placeholderTextColor="rgba(162,134,128,1)"
          style={styles.TextInputStyleClass}
          onChangeText={(text) => {
            setPass(text);
          }}
        />
        <TextInput
          placeholder="confirm password"
          placeholderTextColor="rgba(162,134,128,1)"
          style={styles.TextInputStyleClass}
        />
        <TouchableOpacity onPress={onSignup}>
          <Text style={styles.button}>REGISTER</Text>
        </TouchableOpacity>
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
  images: {
    width: 75,
    height: 75,
    marginTop: 12,
    alignSelf: 'center',
    marginLeft: 150,
    marginRight: 150,
    borderRadius: 50,
    overflow: 'hidden',
  },
});

export default App;
