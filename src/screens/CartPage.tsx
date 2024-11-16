import { View, Text, Dimensions, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useFonts } from 'expo-font'
import SearchBar from '../components/SearchBar'
import BottomBar from '../components/BottomBar'
import CartComponents from '../components/CartComponents'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/NavigationTypes';
import Buttons from '../components/Buttons'

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

  const increment = () => {setCount(count + 1)}

  const decrement = () => {
    if (count > 1){
      setCount(count - 1)
    }
  }

  const debug = () => {
    console.log('Click Success')  
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
      quantity={count}
      price={80}
      decreasePress={decrement}
      increasePress={increment}
    />
    </View>

    <View style = {styles.amountContainer}>
      <Text style = {styles.textAmount}>Total Amount:</Text>
      <Text style = {styles.textTotalAmount}>1233.00</Text>
    </View>

    <View style = {styles.buttonPositioning}>
      <Buttons
        placeholder='Review payment and address'
        backgroundColor='black'
        size='xxl'
        text_color='white'
        text_style='bold'
        onPress={debug}
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

  amountContainer: {
    top: '48%',
    right: '9%'
  },

  textAmount: {
    fontSize: 17,
    fontFamily: 'Lato-Black',
    textAlign: 'right',
  },

  textTotalAmount: {
    top: '10%',
    // right: '25%',
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    textAlign: 'right',
  },

  buttonPositioning: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    bottom: '10%'
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