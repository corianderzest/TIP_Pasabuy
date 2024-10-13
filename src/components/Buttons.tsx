import { View, Text, Button, Dimensions} from 'react-native'
import React from 'react';

type Sizes = 'small' | 'medium' | 'large' | 'xl' | 'xxl';
type Button_Colors = 'lightblue' | 'blue' | 'dirty_white' | 'black';
type Text_Colors = 'white' | 'black';
type Border_Radius_Size = '15' | '55' | '85';
type Text_Style = 'bold' | 'normal';

const {width, height} = Dimensions.get('window');

interface ButtonProps {
  placeholder: string;
  backgroundColor?: Button_Colors;
  height?: number;
  width?: number;
  size?: Sizes;
  text_color?: Text_Colors;
  border_radius: Border_Radius_Size;
  text_style?: Text_Style;
};

const button_size = {
    small: {width: (221 / 1080) * width, height: (67 / 2400) * height}, 
    medium: {width: (280 / 1080) * width, height: (90 / 2400) * height}, 
    large: {width: (337 / 1080) * width, height: (125 / 2400) * height}, 
    xl: {width: (510 / 1080) * width, height: (144 / 2400) * height},
    xxl: {width: (953 / 1080) * width, height: (111 / 2400) * height},
};

const button_color = {
    lightblue: {color: "#103F6E", opacity: 0.8},
    blue: {color: "#103F6E", opacity: 1},
    dirty_white: {color: "#D9D9D9", opacity: 1},
    black: {color: "#000000", opacity: 1},
};

const text_colors_props = {
    black: {color: "#000000", opacity: 1},
    white: {color: "#FFFFFF", opacity: 1},
};

const radius_size = {
    '15': {borderRadius: 15},
    '55': {borderRadius: 55},
    '85': {borderRadius: 85},
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
  border_radius,
  text_style = 'normal',
}) => {

  // const {height: button_height, width: button_width} =
  //   button_size[size] || button_size.medium

  // const {color: button_hex_color, opacity: button_opacity} =
  //   button_color[backgroundColor] || button_color.blue

  // const {color: text_hex_color} =
  //   text_colors_props[text_color] || text_colors_props.black

  // const {borderRadius: button_radius} =
  //   radius_size[border_radius]

  // const {fontWeight: text_fontWeight} =
  //   text_styling[text_style] || text_styling.normal

  const buttonSize = button_size[size] || button_size.medium;
  const buttonHexColor = button_color[backgroundColor] || button_color.blue
  const textHexColor = text_colors_props[text_color].color || text_colors_props.black.color;
  const buttonRadius = radius_size[border_radius].borderRadius;
  const textFontWeight = text_styling[text_style].fontWeight || text_styling.normal.fontWeight;


return(
  <View
    style={{
      backgroundColor: buttonHexColor.color,
      opacity: buttonHexColor.opacity,
      height: height || buttonSize.height,
      width: width || buttonSize.width,
      borderRadius: buttonRadius,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text
        style={{
          color: textHexColor ,
          fontWeight: text_style || textFontWeight,
          fontSize: 20,
        }}>{placeholder}</Text>
    </View>
)
}

export default Buttons