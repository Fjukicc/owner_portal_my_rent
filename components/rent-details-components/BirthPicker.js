import { StyleSheet, Pressable, View, Text, Platform } from "react-native";
import React, { useState } from "react";
//date picker
import DateTimePicker from "@react-native-community/datetimepicker";
import MainButton from "../general-components/MainButton";

const BirthPicker = () => {
  const [date, setDate] = useState(new Date());
  const [isPickerShow, setIsPickerShow] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    if (Platform.OS === "android") {
      setIsPickerShow(false);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode="date"
        display="default"
        onChange={onDateChange}
      />
    </View>
  );
};

export default BirthPicker;

const styles = StyleSheet.create({
  dateInput: { flexGrow: 1 },
  input: { flexGrow: 1 },
});
