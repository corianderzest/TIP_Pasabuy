import { View, Text } from 'react-native'
import { useState } from 'react'
import React from 'react'
import BottomBar from '../components/BottomBar'
import SearchBar from '../components/SearchBar'
import MealOverview from '../components/MealOverview'



const FoodPage = () => {
  return (
    <View>
      <MealOverview/>
    </View>
  )
}

export default FoodPage