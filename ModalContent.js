import { View } from 'react-native';
import React from 'react';
import Styles from './Styles';
import SelectDropdown from 'react-native-select-dropdown';
import { Ionicons } from '@expo/vector-icons';

function ModalContent(props) {
  const themes = {
    batman: {
      colors: ['#f2de02', '#0f0f0f'],
      characters: ['Batman', 'Joker']
    },
    boys: {
      colors: ['#db2c3d', '#2e4ad9'],
      characters: ['Homelander', 'The Deep']
    },
    breakingbad: {
      colors: ['#2a6123', '#6acbe6'],
      characters: ['Walter White', 'Saul Goodman', 'Gustavo Fring']
    },
    starwars: {
      colors: ['#359edb', '#d6c16d'],
      characters: ['Obi-Wan Kenobi', 'Darth Vader']
    }
  }

  function handleChange(event) {
    props.onPress(event.target.value);
  }

  return (
    <View style={Styles.modalInfo}>
      <SelectDropdown
        buttonStyle={Styles.dropdown}
        buttonTextStyle={Styles.dropdowntext}
        defaultButtonText="Filter"
        data={['All', 'Only Breaking Bad', 'Only Batman', 'Only The Boys', 'Only Star Wars']}
        onSelect={(selectedItem, index) => {
          if (index === 0) {
            props.changeFilter('All')
          } else if (index === 1) {
            props.changeFilter(themes.breakingbad)
          } else if (index === 2) {
            props.changeFilter(themes.batman)
          } else if (index === 3) {
            props.changeFilter(themes.boys)
          } else if (index === 4) {
            props.changeFilter(themes.starwars)
          }
        }}
        buttonTextAfterSelection={(selectedItem) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem
        }}
        rowTextForSelection={(item) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item
        }}
      />
      <Ionicons onPress={handleChange} name="ios-close" size={50} color="#212121" />
    </View>
  )
}

export default ModalContent