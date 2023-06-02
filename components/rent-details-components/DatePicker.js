import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
//date picker
import DateTimePicker from "@react-native-community/datetimepicker";
//icons
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const DatePicker = ({title}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [startShow, setStartShow] = useState(false);
  const [endShow, setEndShow] = useState(false);

  const onStartChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log(currentDate)
    setStartShow(Platform.OS === "ios");
    setStartDate(currentDate);
  };
  const onEndChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setEndShow(Platform.OS === "ios");
    setEndDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(!show);
    setMode(currentMode);
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <Feather name="calendar" size={22} color="black" />
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.datePickerContainer}>
        <DateTimePicker
          testID="dateTimePicker"
          value={startDate}
          mode="date"
          display="default"
          onChange={onStartChange}
        />
        <AntDesign name="right" size={18} color="black" />
        <DateTimePicker
          testID="dateTimePicker"
          value={endDate}
          mode="date"
          display="default"
          onChange={onEndChange}
        />
      </View>
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  datePickerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  datePickerButton: {
    width: "30%",
    padding: 8,
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  datePickerButtonText: {
    color: "#fff",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  headerText: {
    marginLeft: 4,
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
});
