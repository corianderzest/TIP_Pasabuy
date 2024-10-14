  import { View, Text, Dimensions, TextInput } from 'react-native'
  import React from 'react'

  type Input_Type = 'account' | 'search'


  const {width, height} = Dimensions.get('window')

  interface InputBoxProps {
    placeholder: string,
    type?: Input_Type, 
    width?: number,
    height?: number,
  }

  const Input_Size = {
    account: {
      width: (816 / 1080) * width, 
      height: (125 / 2400) * height, 
      borderRadius: 10,
      paddingLeft: 15,
      paddingTop: 5,
      borderWidth: 2,},

    search: {width: (781 / 1080) * width, 
      height: (95 / 2400) * height, 
      borderRadius: 50,
      paddingLeft: 15,
      paddingTop: 0,
      borderWidth: 2,}, // testing, remove once header color deployed
    }
  
  const Inputs: React.FC<InputBoxProps> = ({
    type = 'account',
    placeholder,
  })=>{
    
    const input_type = Input_Size[type] || Input_Size.account
    
    return (
      <View
      style={{
        width: input_type.width,
        height: input_type.height,
        borderRadius: input_type.borderRadius,
        borderWidth: input_type.borderWidth,
        backgroundColor: "F8F7F4",
      }}>

      <TextInput
      style={{
        paddingTop: input_type.paddingTop,
        paddingLeft: input_type.paddingLeft,
        fontSize: 15,
      }}>
        <Text
        style={{
          fontSize: 15,
        }}>{placeholder}</Text>
      </TextInput>
      </View>
    )
  }

  export default Inputs