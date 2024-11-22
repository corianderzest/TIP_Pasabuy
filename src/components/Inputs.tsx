  import { View, Text, Dimensions, TextInput, StyleSheet } from 'react-native'
  import React, {useState} from 'react'

  type Input_Type = 'account' | 'search'

  const {width, height} = Dimensions.get('window')

  interface InputBoxProps {
    placeholder: string,
    type?: Input_Type, 
    width?: number,
    height?: number,
    onChangeText?: (text: string) => void,
    secureTextEntry?: boolean,
    value?: any,
  }

  const Input_Size = {
    account: {
      width: (816 / 1080) * width, 
      height: (125 / 2400) * height, 
      borderRadius: 8,
      paddingLeft: 15,
      paddingTop: 8,
      borderWidth: 0,
    },

    search: {
      width: (781 / 1080) * width, 
      height: (95 / 2400) * height, 
      borderRadius: 50,
      paddingLeft: 15,
      paddingTop: 0,
      borderWidth: 0,}, // testing, remove once header color is deployed
    }
  
  const Inputs: React.FC<InputBoxProps> = ({
    type = 'account',
    placeholder,
    onChangeText,
    secureTextEntry = false,
    value,
  })=>{
    
    const input_type = Input_Size[type] || Input_Size.account
    
    return (
      <View
      style={[styles.container, input_type]}>

      <TextInput
      style={styles.input}
      onChangeText={onChangeText}   
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      value={value}
      >


      </TextInput>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(248, 247, 244, 1)',
      borderBottomWidth: 0.2,
      borderTopWidth: 0.2,
      borderLeftWidth: 0.2,
      borderRightWidth: 0.2,
    },

    input: {
      fontSize: 16,
      fontWeight: '300',
    }
  })

  export default Inputs