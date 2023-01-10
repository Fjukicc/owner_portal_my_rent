import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
//rn elements
import { SearchBar } from '@rneui/themed';

const SearchBarInput = ({placeholder}) => {
  return (
    <View style={{width: "100%", marginBottom: 12, marginTop: 8}}>
      <SearchBar
      placeholder={placeholder}
      platform={Platform.OS==="ios" ? "ios" : "android"}
      containerStyle={{backgroundColor: "transparent", height: 34}}
      inputContainerStyle={{borderRadius: 12}}
      inputStyle={{height: 20}}
      lightTheme={true}
    />
    </View>
  )
}

export default SearchBarInput;

const styles = StyleSheet.create({})