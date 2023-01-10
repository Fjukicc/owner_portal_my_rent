import { StyleSheet, ScrollView, Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
//moment
import moment from "moment";

//context
import { SyncedScrollViewContext, syncedScrollViewState } from "../../components/calendar/SyncedScrollViewContext";
//components
import Header from "../../components/general-components/Header";
import Calendar from "../../components/calendar";
//static
import { container } from "../../static/Container";

const CalendarScreen = () => {
  const [daysInMonth, setDaysInMont] = useState();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  //get all days in month and generate objects
  useEffect(() => {
    const generateDaysForCalendar = () => {
      const tempArray = [
        {
          day: moment().format("DD"),
          month: moment().format("MM"),
          dayLabel: days[moment().day()],
          monthLabel: months[parseInt(moment().format("M")) - 1],
          id: moment(),
        },
      ];
      for (var i = 1; i < 30; i++) {
        tempArray.push({
          day: moment().add(i, "days").format("DD"),
          month: moment().add(i, "days").format("M"),
          dayLabel: days[moment().add(i, "days").day()],
          monthLabel: months[parseInt(moment().add(i, "days").format("M")) - 1],
          id: moment().add(i, "days"),
        });
      }
      setDaysInMont(tempArray);
    };
    generateDaysForCalendar();
  }, []);
  return (
    <SyncedScrollViewContext.Provider value={syncedScrollViewState}>
      <Header
        title="Calendar"
      />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={container.defaultContainer}>
          <Calendar daysInMonth={daysInMonth} />
        </View>
      </ScrollView>
    </SyncedScrollViewContext.Provider>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({});
