import { Keyboard, StyleSheet, View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import React from 'react'

const HideKeyboard = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>

  )
}

export default HideKeyboard

const styles = StyleSheet.create({})