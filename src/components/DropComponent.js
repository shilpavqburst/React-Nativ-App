import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DropComponent = ({list, selectedValue, onSelectValue}) => {
  const [showDropList, setShowDropList] = useState(false);

  const onSelect = (value) => {
    setShowDropList(false);
    onSelectValue(value);
  };
  return (
    <View
      style={{
        zIndex: 10,
        height: 'auto',
        marginHorizontal: 30,
      }}>
      <TouchableWithoutFeedback
        onPress={() => {
          setShowDropList(!showDropList);
        }}>
        <View
          style={{
            overflow: 'hidden',
          }}>
          <Text style={[styles.TextInputStyleClass, {fontSize: 22}]}>
            {selectedValue == '' ? 'Select' : selectedValue}
          </Text>
          <Icon
            name={showDropList ? 'caret-up' : 'caret-down'}
            style={{position: 'absolute', right: 20, bottom: 12}}
          />
        </View>
      </TouchableWithoutFeedback>
      {showDropList && (
        <FlatList
          data={list}
          style={{
            // position: 'absolute',
            marginHorizontal: 15,
            borderRadius: 5,
            marginTop: 0,
            paddingVertical: 15,
            backgroundColor: '#fff',
            paddingHorizontal: 20,
            elevation: 5,
            zIndex: 10,
          }}
          // contentContainerStyle={{height: 200}}
          keyExtractor={(i, key) => {
            key.toString();
          }}
          renderItem={({item, index}) => (
            <TouchableNativeFeedback
              useForeground
              onPress={() => onSelect(item)}>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'bariol_regular-webfont',
                    color: 'rgba(162,134,128,1)',
                    //left: -15,
                  }}>
                  {item}
                </Text>
              </View>
            </TouchableNativeFeedback>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputStyleClass: {
    textAlign: 'left',
    marginBottom: 20,
    fontSize: 22,
    height: 40,
    //width: wp(45),
    borderWidth: 1,
    borderColor: '#f3e6df',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    fontFamily: 'bariol_light-webfont',
    top: 20,
    paddingLeft: 20,
    paddingTop: 7,
    paddingBottom: 5,
    color: 'rgba(162,134,128,1)',
    //justifyContent: 'space-between',
  },
});

export default DropComponent;
