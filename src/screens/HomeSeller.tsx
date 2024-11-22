import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SellerComponent from '../components/SellerComponent'
import request from '../icons/profileicons/request.png'
import history from '../icons/profileicons/history.png'
import BottomNavbar from '../components/BottomNavbar'
import SearchBar from '../components/SearchBar'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../navigation/NavigationTypes'

type NavigationProp = {
  navigation: StackNavigationProp<RootStackParamList, 'HomeSeller'>
}

const HomeSeller: React.FC <NavigationProp> = ({
  navigation
}) => {

  const profileRedirect = () => {
    navigation.navigate('ProfilePage')
  }

  const cartRedirect = () => {
    navigation.navigate('CartPage')
  }

  return (
    <View style = {styles.container}>
      <SearchBar
        placeholder='Search for your order'
        profilePress={profileRedirect}
        cartPress={cartRedirect}
      />
      <SellerComponent  
        image={history}
        placeholder='Delivery History'
        onPress={() => {navigation.navigate('DeliveryHistory')}}
      />
      <SellerComponent  
        placeholder='Order Request'
        image={request}
        onPress={() => {navigation.navigate('OrderRequest')}}
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