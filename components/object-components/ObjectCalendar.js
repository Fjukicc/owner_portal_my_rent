import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
//moment js
import moment from "moment";
//calendar
import CalendarPicker from "react-native-calendar-picker";

//icons
import { Entypo } from "@expo/vector-icons";

const ObjectCalendar = () => {
  //start date
  const [startDate, setStartDate] = useState(null);
  //end date
  const [endDate, setEndDate] = useState(null);

  const onDateChange = (date, type) => {
    if (type === "START_DATE") {
      setStartDate(date);
    }
    if (type === "END_DATE" && date !== null) {
      setEndDate(date);
    }
  };

  return (
    <>
      <View style={{ marginBottom: 16 }} />
      <View style={styles.calendarContainer}>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          allowBackwardRangeSelect={true}
          showDayStragglers={true}
          previousComponent={
            <Entypo name="chevron-small-left" size={24} color="black" />
          }
          nextComponent={
            <Entypo name="chevron-small-right" size={24} color="black" />
          }
          todayBackgroundColor="#bababa"
          selectedDayColor="#000"
          selectedDayTextColor="#FFFFFF"
        />
      </View>
      <View style={styles.detailsRow}>
        <View style={styles.dateTextContainer}>
            <Text style={styles.dateLabel}>Arrival</Text>
          <Text style={styles.dateDate}>
            {startDate
              ? moment(startDate).format("DD/MM/YYYY").toString()
              : "odaberi"}
          </Text>
        </View>
        <View style={styles.dateTextContainer}>
            <Text style={styles.dateLabel}>Departure</Text>
          <Text style={styles.dateDate}>
            {endDate
              ? moment(endDate).format("DD/MM/YYYY").toString()
              : "odaberi"}
          </Text>
        </View>
      </View>
    </>
  );
};

export default ObjectCalendar;

const styles = StyleSheet.create({
  detailsRow: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 24,
    marginBottom: 2,
  },
  calendarContainer: {
    backgroundColor: "#FFFFFF",
    padding: 8,
    borderRadius: 12,
    shadowColor: "#C6CEE3",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
  dateTextContainer:{
    display: "flex",
    alignItems: "center",
    padding: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  dateLabel:{
    fontFamily: "Roboto_700Bold",
    color: "#000",
    fontSize: 18,
    marginBottom: 4,
  },
  dateDate:{
    fontFamily: "Roboto_400Regular",
    color: "#000",
    fontSize: 16,
  }
});
