import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import React from 'react'
import PopUpImage from "../assets/images/PopUpImage.png" 
import Buttons from "../components/Buttons"

const {width, height} = Dimensions.get('window')


interface PopUpProps {
placeholder: string,
dialogue: string,
button_confirmation_1: string,
button_confirmation_2: string,
}



const PopUp: React.FC <PopUpProps> = ({
  placeholder, 
  dialogue,
  button_confirmation_1,
  button_confirmation_2,
}) => {
  return (

    // < style = {{elevation: 1}}> //for drop shadow
    <View style = {styles.popUp_container}>
      <View style = {styles.header_container}>
        <Text style = {styles.header_text}>
          {placeholder}
        </Text>
      </View>

      <View style = {styles.image_container}>
      <Image 
      source={PopUpImage}
      style = {styles.image_style}/>  
      <Text></Text>
      </View>

      <View style = {styles.dialogue_container}>
        <Text style = {styles.dialogue_text}>
          {dialogue}
        </Text>
      </View>

      <View style = {styles.button_container}>
        <View style = {styles.left_button}>
        <Buttons
          placeholder={button_confirmation_1}
          backgroundColor='black'
          size='custom'
          text_color='white'
          text_style='bold'
        />
        </View>
         <View style = {styles.right_button}>
        <Buttons
          placeholder={button_confirmation_2}
          backgroundColor='black'
          size='custom'
          text_color='white'
          text_style='bold'
        />
          </View>
       </View>
    </View>
  // </View>
  )
}


const styles = StyleSheet.create({

  popUp_container: {
    width: (739 / 1080) * width,
    height: (800 / 2400) * height,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#f8f7f4",
    alignItems: 'center',
    position: 'relative'
  },

  header_container: {
    backgroundColor: "#000000",
    borderRadius: 8,
    borderWidth: 2,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  header_text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: "#ffffffff",
  },

  button_container: {
    position: 'absolute',
    flexDirection: 'row',
    marginTop: '82%',
  },

  
  image_style: {
    width: 120,
    height: 70,
  },
  
  image_container: {
    alignItems: 'center',
    paddingTop: 20,  
  },

  dialogue_container:{
    marginHorizontal: 30,
  },

  dialogue_text: {
    textAlign: 'center',
    fontSize: 16,
  },

  left_button: {
    marginRight: 8,
  },
    
  right_button: {
    marginLeft: 8,
  },
}
)

export default PopUp