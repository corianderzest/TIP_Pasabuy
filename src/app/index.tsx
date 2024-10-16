import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react'
import Buttons from '../components/Buttons';
import Inputs from "../components/Inputs"
import HelpGuide from "../components/HelpGuide"
import PopUp from "../components/PopUp"

const PopUpTesting = () => {
  return(
  <View style = {styles.container}>
    <PopUp
    placeholder='Confirm Logout'
    dialogue='You have successfully registered to TIP Pasabuy! Click Continue to Login.'
    button_confirmation_1 = 'Cancel'
    button_confirmation_2 = 'Confirm'/> 
  </View>
  )
}

export default PopUpTesting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


// const ButtonTesting = () => {
//       return (
//             <View style = {styles.container}> 
//               <Buttons
//               placeholder='Add to cart'
//               backgroundColor='black'
//               text_color="white"
//               size="xxl"
//               text_style="bold"/> 
//             </View>
//           )
//     }

// export default ButtonTesting

// const TextEntryTesting = () => {
//     return(
//       <View style = {styles.container}>
//         <Inputs
//           placeholder="Search for your order"
//           type="search"/>
//       </View>

//       )
//     }

// export default TextEntryTesting
    
// const GuideTesting = () => {
//   return(
//   <View style = {styles.container}>
//   <HelpGuide
//     type='add_button'
//   />
//   </View>
//   )
// }

// export default GuideTesting