import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { useState } from 'react'
import React from 'react'
import BottomBar from '../components/BottomBar'
import SearchBar from '../components/SearchBar'
import MealOverview from '../components/MealOverview'
import coffee_1 from '../assets/meals/coffee_1.png'
import coffee_2 from '../assets/meals/coffee_2.png'
import coffee_3 from '../assets/meals/coffee_3.png'
import lemonade from '../assets/meals/lemonade.png'
import gulaman from '../assets/meals/gulaman.png'


const FoodPage = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <SearchBar placeholder = 'Search for your order'/>

      <View style = {styles.meal_1}>
      <MealOverview
        image={coffee_1}
      />
      </View>

      <View style = {styles.meal_2}>
      <MealOverview
        image={coffee_2}
      />
      </View>

      <View style = {styles.meal_3}>
      <MealOverview
        image={coffee_3}
      />
      </View>

      <View style = {styles.meal_4}>
      <MealOverview
        image={gulaman}
      />
      </View>

      <View style = {styles.meal_5}>
      <MealOverview
        image={lemonade}
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
    backgroundColor: '#F8f7f4',
  },

  meal_1: {
    top: '3%'
  },

  meal_2: {
    top: '18%'
  },

  meal_3: {
    top: '33%'
  },

  meal_4: {
    top: '48%'
  },

  meal_5: {
    top: '63%'
  },

  bottomBarPositioning: {
    bottom: '-83%'
  },

})

export default FoodPage
