import { View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import About from '../components/About'
import SearchBar from '../components/SearchBar'
import BottomBar from '../components/BottomBarCustomer'
import Profile from '../icons/profile.png'
import Home from '../icons/home.png'
import Add from '../icons/add.png'
import Order from '../icons/order.png'
import Cart from '../icons/cart.png'
import Edit from '../icons/edit.png'
import { RootStackParamList } from '../navigation/NavigationTypes'
import { StackNavigationProp } from '@react-navigation/stack'

const {width, height} = Dimensions.get('window')

type AboutNavigation = {
  navigation: StackNavigationProp<RootStackParamList, 'AboutPage'>
}

const AboutPage: React.FC <AboutNavigation> = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.container}>

      <SearchBar 
      placeholder='Search for your order'
      profilePress={() => {navigation.navigate('ProfilePage')}}
      cartPress={() => {navigation.navigate('CartPage')}}/>

      <View style = {styles.bottomBarPositioning}>
        <BottomBar/>
      </View>

      <View style = {styles.headerContainer}>
        <Text style = {styles.headerText}>
          TIP Pasabuy is an innovative software developed by the Technological Institute of the Philippines (TIP), designed to cater to the needs of students by providing a platform similar to Grab. It allows students to register as both riders and customers, offering a convenient way to request or provide delivery services within the campus or nearby areas. 
        </Text>
      </View>

      <View style = {styles.helpContainer}>
        <About
          placeholder='Profile Button: Used to redirect to Profile Page'
          image={Profile}
          onPress={() => {navigation.navigate('ProfilePage')}}
        />
        <About
          placeholder='Home Button: Used to navigate to the Home Page'
          image={Home}
          onPress={() => {navigation.navigate('HomePage')}}
        />
        <About
          placeholder='Add Button: Where it is used to add items to cart'
          image={Add}
          onPress={() => {navigation.navigate('FoodPage')}}
        />
        <About
          placeholder='Orders Button: It is used to navigate to your current order'
          image={Order}
          onPress={() => {navigation.navigate('YourOrderPage')}}
        />
        <About
          placeholder='Cart Button: Used to navigate to the cart page'
          image={Cart}
          onPress={() => {navigation.navigate('CartPage')}}
        />
        {/* <About
          placeholder='Lorem Ipsum'
          image={Edit}
        /> */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8f7f4',
    // position: 'relative'
  },

  helpContainer: {
    top:'4%'
  },
  
  headerText: {
    fontSize: 15,
    marginHorizontal: '5%',
    marginVertical:'5%',
    textAlign: 'center',
  },

  headerContainer: {
    top: '2%',
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: (650 / 2400) * height,
    width: (950/ 1080) * width,
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    elevation: 3
  },

  bottomBarPositioning: {
    bottom: '-83%' 
  },

})

export default AboutPage