import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SellerComponent from '../components/SellerComponent'
import request from '../icons/profileicons/request.png'
import history from '../icons/profileicons/history.png'
import BottomNavbar from '../components/BottomNavbar'
import SearchBar from '../components/SearchBar'

function HomeSeller() {
  return (
    <View style = {styles.container}>
      <SearchBar
        placeholder='Search for your order'
        // onPress1={'ProfilePage'}
      />
      <SellerComponent  
        image={history}
        placeholder='Delivery History'
      />
      <SellerComponent  
        image={request}
        placeholder='Order Request'
      />
      <View style = {styles.bottomBarPositioning}>
        <BottomNavbar/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8F7F4'
  },

  bottomBarPositioning: {
    bottom: '-61%',
  },

})

export default HomeSeller