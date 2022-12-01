import { StyleSheet, Text, Pressable, TextInput, View } from "react-native";
import React from "react";

//icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

//date time picker
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({ text, onDatePickerPress, icon, left }) => {
  return (
    <Pressable style={styles.datePickerContainer} onPress={onDatePickerPress}>
      {left === true ? icon : ""}
      <Text>{text}</Text>
      {left === false ? icon : ""}
    </Pressable>
  );
};

const ReservationsFilter = () => {
  return (
    // first rov
    <View style={styles.reservationsFilterContainer}>
      <Text style={styles.sortByDateLabel}>Sort by date:</Text>
      <View style={styles.firstRowContainer}>
        <View style={styles.datePickerViewContainer}>
          <DatePicker
            text="Start Date"
            icon={
              <MaterialCommunityIcons
                name="calendar-arrow-right"
                size={20}
                color="black"
                style={{ marginRight: 4 }}
              />
            }
            left={true}
          />
        </View>
        <View style={styles.datePickerViewContainer}>
          <DatePicker
            text="End Date"
            icon={
              <MaterialCommunityIcons
                name="calendar-arrow-left"
                size={20}
                color="black"
                style={{ marginLeft: 4 }}
              />
            }
            left={false}
          />
        </View>
      </View>
      {/* second row */}
      <View style={styles.secondRowContainer}>
        <View style={{ width: "100%" }}>
          <Text style={styles.sortByDateLabel}>Search for rent:</Text>
          <TextInput
            placeholder="Search for rent"
            placeholderTextColor="#000"
            style={styles.searchReservation}
          />
        </View>
      </View>
    </View>
  );
};

export default ReservationsFilter;

const styles = StyleSheet.create({
  reservationsFilterContainer: {
    marginTop: 16,
    backgroundColor: "transparent",
    width: "100%",
    height: "auto",
    borderRadius: 12,
  },
  firstRowContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondRowContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  middleContainer: {},
  datePickerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 2,
    paddingHorizontal: 6,
    paddingVertical: 10,
    alignItems: "center",
  },
  datePickerViewContainer: {
    width: "45%",
  },
  sortByDateLabel: {
    marginBottom: 6,
    fontFamily: "Roboto_500Medium",
  },
  searchReservation: {
    width: "100%",
    paddingHorizontal: 8,
    borderColor: "#000",
    borderWidth: 2,
    height: 40,
    borderRadius: 8,
  },
});
