import { StyleSheet, Text, View, TextInput } from "react-native";
import React,{useState} from "react";
//dropdown
import { Dropdown } from "react-native-element-dropdown";

//components
import { Feather } from '@expo/vector-icons';

const data = [
  { label: "Day", value: "1" },
  { label: "3 Days", value: "2" },
  { label: "Week", value: "3" },
  { label: "Month", value: "4" },
];

const Subheader = ({ text, isDropdownShown, isSearchLabelShown=false }) => {
  const [value, setValue] = useState("3");
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={{ marginVertical: 16 }}>
      {isDropdownShown ? (
        <View style={styles.secondRowContainer}>
          <Text style={styles.subtitle}>Filter Reservations</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search={false}
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select item" : "..."}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <Feather style={styles.icon} name="filter" size={20} color={isFocus ? "blue" : "black"} />
            )}
          />
        </View>
      ) : null}
      <View style={{ marginBottom: 8 }} />
      <View style={[styles.firstRowContainer,!isSearchLabelShown ? {marginTop: 6 } : null]}>
        <View style={{ width: "100%" }}>
          {isSearchLabelShown? <Text style={styles.sortByDateLabel}>{text}</Text> : null}
          <TextInput
            placeholder={text}
            placeholderTextColor="#000"
            style={[styles.searchReservation]}
          />
        </View>
      </View>
    </View>
  );
};

export default Subheader;

const styles = StyleSheet.create({
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
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  sortByDateLabel: {
    marginBottom: 6,
    fontFamily: "Roboto_500Medium",
  },
  searchReservation: {
    width: "100%",
    paddingHorizontal: 8,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    height: 40,
  },
  subtitle: {
    fontFamily: "Roboto_500Medium",
    fontSize: 14,
  },
  dropdown: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 140,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
