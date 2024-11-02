import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import { useState } from 'react'
import React from 'react'
import add from '../icons/add.png'



export interface ItemProps {
  id: number,
  name: string,
  price: number,
  description: string,
  image: string,
  onPress?: () => void
}

const {width, height} = Dimensions.get('window')

const MealOverview: React.FC <ItemProps> = ({
  id,
  name,
  price,
  description,
  image,
  onPress,
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

      <View style = {styles.addPositioning}>
        <TouchableWithoutFeedback onPress={addButton}>
          <Image
          style={styles.imageProps}
          source={add}
          />
        </TouchableWithoutFeedback>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  containerPositioning: {
    top: '20%',
    alignItems: 'center',
    position: 'relative',
  },

  containerWrapper: {
    width: (960 / 1080) * width,
    height: (333 / 2400) * height,
    backgroundColor: '#FEDC8A',
    opacity: 1,
    borderRadius: 10,
    borderBottomWidth: 5,
    elevation: 2,
  },

  container: {
    top: '28.5%',
    width: (960 / 1080) * width,
    height: (243 / 2400) * height,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomWidth: 0.15,
    elevation: 0.3,
  },

  addPositioning: {
    position: 'absolute',
    right: '3.3%',
    top: '-6.5%'
  },

  imageProps: {
    height: (100 / 2400) * height,
    width: (90 / 1080) * width
  },

})

export default MealOverview