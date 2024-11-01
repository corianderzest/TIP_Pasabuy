import { View, Text, Dimensions, SafeAreaView, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'
import profile from "../icons/profile.png"
import cart from "../icons/cart.png"

const {width, height} = Dimensions.get('window')

interface SearchBarProps {
  placeholder: string,
  onChangeText?: (text: string) => void,
  // onPress: () => void
}

const SearchBar: React.FC <SearchBarProps> = ({
  placeholder,
  onChangeText,
  // onPress,
}) => {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.searchBarContainer}>

        <TextInput style = {styles.input}>
          {placeholder}
        </TextInput>

        <View style = {styles.profilePositioning}>
          <Image
          style = {styles.imageSize}
          source={profile}
          />
        </View>

        <View style = {styles.cartPositioning}>
          <Image
          style = {styles.imageSize}
          source={cart}
          />
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3C623',
    width: '100%',
    height: (208 / 2400) * height
  },

  searchBarContainer: {
    backgroundColor: '#F8F7F4',
    width: (781 / 1080) * width,
    height: (95 / 2400) * height,
    borderRadius: 50,
    top: '28%',
    left: '14.5%',
  },

  input: {
    left: "8%",
    top: "6%",
  },

  imageSize: {
    width: 37,
    height: 37,
  },

  profilePositioning: {
    right: '15.5%',
    bottom: '92%'
  },

  cartPositioning: {
    left: '102.5%',
    bottom: '212%'
  }

})

export default SearchBar