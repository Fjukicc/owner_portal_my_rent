import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
//icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

//fake data
import { listOfObjects } from "../../fake-data";
//components
import SyncedScrollView from "./SyncedScrollView";

const index = ({ daysInMonth }) => {
  return (
    <View style={{ flex: 1, marginBottom: 2 }}>
      {listOfObjects.map((obj, i) => {
        return (
          <View style={styles.objectCalendarContainer} key={obj.id}>
            <View style={styles.firstRowContainer}>
              <View style={styles.objNameIconContainer}>
                <MaterialCommunityIcons
                  name="cube-outline"
                  size={24}
                  color="#2176FF"
                  style={{ marginRight: 4 }}
                />
                <Text style={styles.objectNameText}>{obj.object_name}</Text>
              </View>
            </View>
            <SyncedScrollView
              bounces={false}
              horizontal
              id={obj.id}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.secondRowContainer}>
                {daysInMonth?.map((days, i) => {
                  return (
                    <View key={obj.id + " " + days.id}>
                      <View style={styles.dateContainer}>
                        <View style={styles.dayMonthLabelContainer}>
                          <Text style={styles.monthLabelText}>
                            {days.monthLabel}
                          </Text>
                          <Text style={styles.dayLabelText}>
                            {days.dayLabel}
                          </Text>
                        </View>
                        <Text style={styles.monthText}>{days.day}</Text>
                      </View>
                      <View style={styles.calendarDayContainer}></View>
                    </View>
                  );
                })}
              </View>
            </SyncedScrollView>
          </View>
        );
      })}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  objectCalendarContainer: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  firstRowContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  objectNameText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    color: "#03012D",
  },
  objNameIconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  secondRowScrollContainer: {
    marginTop: 12,
  },
  secondRowContainer: {
    marginTop: 12,
    borderRightWidth: 1,
    borderColor: "#E5e6e8",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  dateContainer: {
    width: 60,
    paddingHorizontal: 4,
    paddingVertical: 6,
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#E5e6e8",
    borderRightWidth: 0,
  },
  calendarDayContainer: {
    width: 60,
    height: 70,
    borderWidth: 1,
    borderColor: "#E5e6e8",
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  monthLabelText: {
    fontFamily: "Roboto_700Bold",
    color: "#000",
    fontSize: 13,
    marginBottom: 4,
  },
  dayLabelText: {
    fontFamily: "Roboto_700Bold",
    color: "#000",
    fontSize: 14,
    marginBottom: 6,
  },
  monthText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
  },
  dayMonthLabelContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
