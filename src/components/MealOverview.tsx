import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import { useState } from 'react'
import React from 'react'
import add from '../icons/add.png'
import payment from '../icons/payment.png'
import popular_icon from '../icons/popular_icon.png'
import { useFonts } from 'expo-font'

export interface ItemProps {
  // id: number,
  name: string,
  price: number,
  description: string,
  image: any,
  onPress?: () => void
}

const {width, height} = Dimensions.get('window')

const MealOverview: React.FC <ItemProps> = ({
  // id,
  name,
  price,
  description,
  image,
  onPress,
}) => {

  const [fonts] = useFonts({
    'Lato-Bold': require('../assets/fonts/Lato/Lato-Bold.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato/Lato-Regular.ttf'),
    'Lato-Black': require('../assets/fonts/Lato/Lato-Black.ttf'),
    'Lato-Light': require('../assets/fonts/Lato/Lato-Light.ttf'),
    'Lato-Thin': require('../assets/fonts/Lato/Lato-Thin.ttf')
  })

  if (!fonts) {
    return null
  }

  const addButton = () => {
    console.log('successfully added to the cart!')
  }

  return (
    <SafeAreaView style = {styles.containerPositioning}>
      
      <View style = {styles.containerWrapper}>
        <View style = {styles.container}>
          <View style = {styles.detailsPositioning}>
            <Text style = {[styles.detailsStyling, {top: '6%'}]}>{name || 'No Name Available'}</Text>
            <Text style = {[styles.descriptionStyling, {top: '8%'}]}>{description || 'No Description Available'}</Text>
            
            
            <Text style = {[styles.descriptionStyling, {top: '12%', left: '6.5%'}]}>₱{price || 'No Price Available'}</Text>
            
            <Text style = {[styles.detailsStyling, {top: '15%', left: '6.5%'}]}>Popular</Text>

            <Image
              source={payment}
              style={[styles.iconProps]}
            /> 

            <Image
              source={popular_icon}
              style={styles.iconProps}
            /> 

          </View>
        </View>
      </View>

        <Image
              style={styles.mealProps}
              source={image}
        />  

        <TouchableWithoutFeedback onPress={onPress}>
          <Image
          style={styles.imageProps}
          source={add}
          />
        </TouchableWithoutFeedback>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  containerPositioning: {
    // marginTop: '24%',
    alignSelf: 'center',
    position: 'absolute',
  },

  containerWrapper: {
    width: (960 / 1080) * width,
    height: (270 / 2400) * height,
    backgroundColor: '#FEDC8A',
    opacity: 1,
    borderRadius: 10,
    borderBottomWidth: 5,
    elevation: 2,
  },

  container: {
    top: '28.5%',
    width: (960 / 1080) * width,
    height: (255 / 2400) * height,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomWidth: 0.15,
    elevation: 0.3,
  },

  iconProps: {
    height: 17, 
    width: 17,
    bottom: '19%'
    
  },

  detailsPositioning: {
    paddingLeft: '5%',
  },

  detailsStyling: {
    fontFamily: 'Lato-Black'
  },

  descriptionStyling: {
    fontFamily: 'Lato-Regular'
  },

  mealProps: {
    height: '100%',
    width: '28%',
    bottom: '84%',
    left: '70%'
  },

  imageProps: {
    height: (90 / 2400) * height,
    width: (80 / 1080) * width,
    position: 'absolute',
    right: '-3%',
    top: '-13%'
  },

})

export default MealOverview