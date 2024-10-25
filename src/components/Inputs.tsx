  import { View, Text, Dimensions, TextInput } from 'react-native'
  import React, {useState} from 'react'

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
  })=>{
    
    const [inputValue, setInputValue] = useState('');
    const input_type = Input_Size[type] || Input_Size.account
    
    return (

      

      <View
      style={{
        width: input_type.width,
        height: input_type.height,
        borderRadius: input_type.borderRadius,
        borderWidth: input_type.borderWidth,
        backgroundColor: 'rgba(248, 247, 244, 1)',
        borderBottomWidth: 0.2,
        borderTopWidth: 0.2,
        borderLeftWidth: 0.2,
        borderRightWidth: 0.2,
      }}>

      <TextInput
      style={{
        paddingTop: input_type.paddingTop,
        paddingLeft: input_type.paddingLeft,
        fontSize: 16,
        fontWeight: '300',
      }}
      value={inputValue}
      onChangeText={setInputValue}
      placeholder={placeholder}
      >


      </TextInput>
      </View>

    )
  }

  export default Inputs