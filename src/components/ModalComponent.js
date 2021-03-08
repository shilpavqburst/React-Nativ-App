import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';

const ModalComponent = ({onSetPriceRange, modalVisible}) => {
  const [priceRange, setPriceRange] = useState({low: '', high: ''});
  const onChange = (text, key) => {
    const temp = priceRange;
    temp[key] = text;
    setPriceRange({...temp});
  };
  return (
    // <View style={styles.centeredView}>
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {/* <Text style={styles.modalText}>Hello World!</Text> */}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              onSetPriceRange(priceRange);
            }}>
            <Text style={styles.textStyle}>Submit</Text>
          </Pressable>
          <TextInput
            placeholder="low"
            keyboardType="numeric"
            onChangeText={(txt) => onChange(txt, 'low')}></TextInput>
          <TextInput
            placeholder="high"
            keyboardType="numeric"
            onChangeText={(txt) => onChange(txt, 'high')}></TextInput>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalComponent;
