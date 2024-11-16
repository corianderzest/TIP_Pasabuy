import { View, Text, Dimensions, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useFonts } from 'expo-font'
import SearchBar from '../components/SearchBar'
import BottomBar from '../components/BottomBar'
import CartComponents from '../components/CartComponents'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/NavigationTypes';

type CartPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CartPage'>;
}

const {width, height} = Dimensions.get('window')

const CartPage: React.FC <CartPageProps> = ({navigation}) => {

  const [fonts] = useFonts({
    'Lato-Bold': require('../assets/fonts/Lato/Lato-Bold.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato/Lato-Regular.ttf'),
    'Lato-Black': require('../assets/fonts/Lato/Lato-Black.ttf')
  })

  if (!fonts) {
    return null
  }

  const profileRedirect = () => {
    navigation.navigate('ProfilePage')
  }

  const [count, setCount] = useState(1)

  const increment = () => {
    
  }

  return (
    <SafeAreaView style = {styles.container}>

    <SearchBar 
    placeholder='Search for your order'
    onPress1={profileRedirect}/>
    <View style = {styles.bottomBarPositioning}>
    <BottomBar/>
    </View>
    <View style = {styles.headerContainer}>
    <Text style = {styles.headerStyling}>Cart</Text>
    </View>

    <View style = {styles.estimateProps}>
      <View style = {styles.estimatePositioning}>
      <Text style = {styles.estimationProps}>Estimated Delivery</Text>
      <Text style = {styles.timeProps}>12:05</Text>
      </View>
    </View>

    <View style = {styles.componentPositioning}>
    <CartComponents
      itemName='Hazelnut Iced Coffee'
      quantity={1}
      price={80}
    />
    </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f7f4'
  },

  estimationProps: {
    color: '#A18C8C',
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    top: '10%'
  },

  timeProps: {
    fontFamily: 'Lato-Black',
    fontSize: 25,
    top: '35%'
  },

  estimatePositioning: {
    left: '4%',
    top: '8%'
  },

  headerContainer: {
    left: '4.3%',
    top: '2.5%',
  },

  headerStyling: {
    fontFamily: 'Lato-Black',
    fontSize: 25,
    zIndex: 1,
  },

  estimateProps: {
    backgroundColor: '#fff',
    height: (270 / 2400) * height,
    width: (990 / 1080) * width,
    elevation: 2,
    borderRadius: 10,
    alignSelf: 'center',
    top: '5%',
  },

  bottomBarPositioning: {
    bottom: '-83%'
  },

  componentPositioning: {
    top: '7%'
  },

})

export default CartPage