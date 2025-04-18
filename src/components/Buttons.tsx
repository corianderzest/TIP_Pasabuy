import { View, Text, Button, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

type Sizes = 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'custom';
type Button_Colors = 'lightblue' | 'blue' | 'dirty_white' | 'black' |'yellow' | 'red';
type Text_Colors = 'white' | 'black' | 'transparent' | 'yellow';
type Text_Style = 'bold' | 'normal';

const {width, height} = Dimensions.get('window'); 

interface ButtonProps {
  placeholder: string;
  backgroundColor?: Button_Colors;
  height?: number;
  width?: number;
  size?: Sizes;
  text_color?: Text_Colors;
  text_style?: Text_Style;
  onPress?: () => void
};

const button_size = {
    small: {width: (221 / 1080) * width, height: (67 / 2400) * height, borderRadius: 15}, 
    medium: {width: (280 / 1080) * width, height: (90 / 2400) * height, borderRadius: 15}, 
    large: {width: (337 / 1080) * width, height: (125 / 2400) * height, borderRadius: 15}, 
    xl: {width: (510 / 1080) * width, height: (144 / 2400) * height, borderRadius: 85},
    xxl: {width: (953 / 1080) * width, height: (111 / 2400) * height, borderRadius: 55},

    // for confirmation
    custom: {width: (270 / 1080) * width, height: (115 / 2400) * height, borderRadius: 8}, 
};

const button_color = {  
    lightblue: {color: "#103F6E", opacity: 0.8},
    blue: {color: "#103F6E", opacity: 1},
    dirty_white: {color: "#D9D9D9", opacity: 1},
    black: {color: "#000000", opacity: 1},
    yellow: { color: "#F3C623", opacity: 1 },
    red: { color: "#B60000", opacity: 1 },
};

const text_colors_props = {
    black: {color: "#000000", opacity: 1},
    white: {color: "#FFFFFF", opacity: 1},
    transparent: {color: "#F8F7F4", opacity: 1},
    yellow: {color: "#F3C623", opacity: 1},
};

const text_styling = {
  bold: {fontWeight: "bold"},
  normal: {fontWeight: "normal"},
};

const Buttons: React.FC<ButtonProps> = ({
  placeholder,
  backgroundColor = "blue",
  height,
  width,
  size = 'small',
  text_color = 'black',
  text_style = 'normal',
  onPress
}) => {

  const buttonSize = button_size[size] || button_size.medium;
  const buttonHexColor = button_color[backgroundColor] || button_color.blue
  const textHexColor = text_colors_props[text_color].color || text_colors_props.black.color;
  const textFontWeight = text_styling[text_style].fontWeight || text_styling.normal.fontWeight;


return(
  <TouchableOpacity onPress={onPress}>
      <View
      style={[styles.container, 
        {backgroundColor: buttonHexColor.color,
        opacity: buttonHexColor.opacity,
        height: height || buttonSize.height,
        width: width || buttonSize.width,
        borderRadius: buttonSize.borderRadius,
        }]}>
        <Text
          style={{
            color: textHexColor ,
            fontWeight: text_style || textFontWeight,
            fontSize: 17,
          }}>{placeholder}</Text>
      </View>
  </TouchableOpacity>
)
}

const styles = StyleSheet.create({
  container: {
  elevation: 2.5,
  justifyContent: "center",
  alignItems: "center",
  borderTopWidth: 0.1,
  borderLeftWidth: 0.1,
  borderRightWidth: 0.1,
  borderBottomWidth: 0.1,
  },
})

export default Buttons