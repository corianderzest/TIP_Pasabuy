import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import { useState } from 'react'
import React from 'react'
import add from '../icons/add.png'
import chicken from '../assets/meals/chicken.png'
import payment from '../assets/icons/payment.png'
import popular_icon from '../assets/icons/popular-icon.png'


import { firestoreDB } from '../backend/firebaseInitialization'
import {getDocs} from 'firebase/firestore'

export interface ItemProps {
  // id: number,
  // name: string,
  // price: number,
  // description: string,
  image: any,
  onPress?: () => void
}

const {width, height} = Dimensions.get('window')

const MealOverview: React.FC <ItemProps> = ({
  // id,
  // name,
  // price,
  // description,
  // onPress,
  image,
}) => {

  const addButton = () => {
    console.log('successfully added to the cart!')
  }

  return (
    <SafeAreaView style = {styles.containerPositioning}>
      
      <View style = {styles.containerWrapper}>
        <View style = {styles.container}>
          
        </View>
      </View>

        <Image
              style={styles.mealProps}
              source={image}
        />  

        <TouchableWithoutFeedback onPress={addButton}>
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
    height: (250 / 2400) * height,
    backgroundColor: '#FEDC8A',
    opacity: 1,
    borderRadius: 10,
    borderBottomWidth: 5,
    elevation: 2,
  },

  container: {
    top: '28.5%',
    width: (960 / 1080) * width,
    height: (235 / 2400) * height,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomWidth: 0.15,
    elevation: 0.3,
  },

  mealProps: {
    height: '100%',
    width: '28%',
    bottom: '88%',
    left: '70%'
  },

  imageProps: {
    height: (100 / 2400) * height,
    width: (90 / 1080) * width,
    position: 'absolute',
    right: '-3%',
    top: '-12%'
  },

})

export default MealOverview