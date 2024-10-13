import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react'
import Buttons from '../components/Buttons';

// const TextEntryTesting = () => {

  

// }

// export default TextEntryTesting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const ButtonTesting = () => {
  return (
    <View style = {styles.container}> 
      <Buttons
      placeholder='Add to cart'
      backgroundColor='black'
      text_color="white"
      border_radius='85'
      size="xxl"
      text_style="bold"/> 
    </View>
  )
}

export default ButtonTesting