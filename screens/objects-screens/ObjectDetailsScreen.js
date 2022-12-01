import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//components
import Header from '../../components/general-components/Header';

const ObjectDetailsScreen = ({route}) => {
  const { params } = route.params;
  return (
    <View>
      <Header title="Object Details"/>
      <View style={styles.objectDetailsHeader}>

      </View>
    </View>
  )
}

export default ObjectDetailsScreen;

const styles = StyleSheet.create({
  objectDetailsHeader:{
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
  }
})