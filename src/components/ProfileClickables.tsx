import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

interface ClickableProps {
  placeholder: string,
  image: any,
  onPress?: () => void
}

const ProfileClickables: React.FC <ClickableProps> = ({
  placeholder,
  image,
}) => {

    const [fonts] = useFonts({
    'Lato-Bold': require('../assets/fonts/Lato/Lato-Bold.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato/Lato-Regular.ttf'),
    'Lato-Black': require('../assets/fonts/Lato/Lato-Black.ttf')
  })

  if (!fonts) {
    return null
  }


  return (
    <TouchableOpacity>
      <View style = {styles.container}>
        <View style = {styles.detailProps}>
          <Image
            style={styles.imageProps}
            source={image}
            />
          <Text style = {styles.textStyle}>{placeholder}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '13%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  textStyle: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    paddingLeft: '5%',
    opacity: 0.8,
  },

  imageProps: {
    height: 32,
    width: 29,
  },

  detailProps: {
    top: '3.5%',
    paddingLeft: '8%',
    flexDirection: 'row',
    alignItems: 'center'
  },

})

export default ProfileClickables