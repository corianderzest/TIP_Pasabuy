import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import StallComponent from '../components/StallComponent'
import tapsilog from '../assets/meals/tapsilog.png'
import SearchBar from '../components/SearchBar'
import BottomBar from '../components/BottomBarCustomer'
import shake from '../assets/meals/shake.png'
import cake from '../assets/meals/cake.png'
import { RootStackParamList } from '../navigation/NavigationTypes'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


type StallsNavigation = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'StallsPage'>
}

const StallsPage: React.FC<StallsNavigation> = ({navigation}) => {
  
  const profileRedirect = () => {
    navigation.navigate('ProfilePage')
  }

  const cartRedirect = () => {
    navigation.navigate('CartPage')
  }

  return (
    <SafeAreaView style = {styles.container}>
     
      <SearchBar 
      placeholder='Search for your order'
      profilePress={profileRedirect}
      cartPress={cartRedirect}/>

      <StallComponent
        placeholder='Tapsilog ni Rod Vince'
        image={tapsilog}
      />

      <View style = {styles.stall1Positioning}>
      <StallComponent
        placeholder='Shake ni Mak'
        image={shake}
      />
      </View>

      <View style = {styles.stall2Positioning}>
      <StallComponent
        placeholder='Rod Vince Cake'
        image={cake}
      />
      </View>

    <View style = {styles.bottomBarPositioning}>
      <BottomBar/>
    </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f7f4'
  },

  stall1Positioning: {
    top: '27%'
  },

  stall2Positioning: {
    top: '51%'
  },

  bottomBarPositioning: {
    bottom: '-83%'
  },


})

export default StallsPage