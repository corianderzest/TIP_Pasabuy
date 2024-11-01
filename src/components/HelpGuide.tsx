import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import add from "../icons/add.png"
import cart from "../icons/cart.png"
import edit from "../icons/edit.png"
import help from "../icons/help.png"
import home from "../icons/home.png"
import order from "../icons/order.png"
import profile from "../icons/profile.png"

//////////////////////  DON'T EDIT SOMETHING DUNNO WHAT TO DO HERE 'YET' \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////  DON'T EDIT SOMETHING DUNNO WHAT TO DO HERE 'YET' \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////  DON'T EDIT SOMETHING DUNNO WHAT TO DO HERE 'YET' \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////  DON'T EDIT SOMETHING DUNNO WHAT TO DO HERE 'YET' \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////  DON'T EDIT SOMETHING DUNNO WHAT TO DO HERE 'YET' \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////  DON'T EDIT SOMETHING DUNNO WHAT TO DO HERE 'YET' \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////  DON'T EDIT SOMETHING DUNNO WHAT TO DO HERE 'YET' \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////  DON'T EDIT SOMETHING DUNNO WHAT TO DO HERE 'YET' \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


type button_type = 'add_button' | 'cart_button' | 'edit_button' | 'help_button' | 'home_button' | 'order_button' | 'profile_button'

const {width, height} = Dimensions.get('window')

interface HelpGuideProps {
  type?: button_type,
}

const button_properties = {
  add_button: {source: add},
  cart_button: {source: cart},
  edit_button: {source: edit},
  help_button: {source: help},
  home_button: {source: home},
  order_button: {source: order},
  profile_button: {source: profile},
}

const HelpGuide: React.FC <HelpGuideProps> = ({
  type = 'add_button',
}) => {

  const image_props = button_properties[type] || button_properties.add_button

  return (
    <View style ={{
      width: 147 / 1080 * width,
      height: 141 / 2400 * height,
      borderWidth: 2,
      borderRadius: 8,
      backgroundColor: "F8F7F4",
      alignItems: 'center',
      justifyContent: 'center'
    }}>
    <Image 
      source = {image_props.source}
      style={{
        width: '65%',
        height: '80%',
      }}
    />
    </View>
  )
}

export default HelpGuide