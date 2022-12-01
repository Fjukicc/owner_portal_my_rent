import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
//context
import { UserContext } from "../../context/UserProvider";

const UserInfo = () => {
  const { userData } = useContext(UserContext);

  return (
    <View style={{marginBottom: 16}}>
      <Text style={styles.headerText}>Bok, {userData.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    headerText:{
        fontSize: 20,
        fontFamily: "Roboto_700Bold",
    }
})

export default UserInfo;
