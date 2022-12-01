import { StyleSheet, ScrollView, Text, View } from 'react-native'
import React from 'react'

//components
import Header from '../../components/general-components/Header'
import ReservationsList from '../../components/general-components/ReservationsList'
import ReservationsFilter from '../../components/general-components/ReservationsFilter'
//fake data
import { newReservations } from '../../fake-data'
//static
import { container } from '../../static/Container'

const AllReservations = () => {
  return (
    <View style={[container.defaultContainer, {paddingBottom: 0}]}>
      <Header title="All Reservations"/>
      <ReservationsFilter/>
      <View style={{marginBottom: 16}}/>
      <ReservationsList data={newReservations}/>
    </View>
  )
}

export default AllReservations

const styles = StyleSheet.create({
    scrollViewStyle:{
        flex: 1,
        padding: 20,
      },
});