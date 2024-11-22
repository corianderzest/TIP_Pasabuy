import { View, Text, StyleSheet, SafeAreaView, Dimensions, Image, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import TouchableWithoutFeedback from 'react-native-gesture-handler'
import { useFonts } from 'expo-font'


const {width, height} = Dimensions.get('window')

interface SellerComponentProps {
  placeholder: string,
  image: any,
  onPress?: () => void
}

const SellerComponent: React.FC <SellerComponentProps> = ({
  placeholder,
  image,
  onPress
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
    <TouchableWithoutFeedback onPress={onPress}>
      <SafeAreaView style = {styles.container}>

        <View style = {styles.imageContainer}>
          <Image
            style={styles.imageProps}
            source={image}
          />
        </View>

        <View style = {styles.textContainer}>
          <Text style = {styles.textProps}>{placeholder}</Text>
        </View>

      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({

  container: {
    marginTop: '10%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: (970 / 1080) * width,
    height: (250 / 2400) * height,
    borderRadius: 8,
    position: 'relative',
    borderBottomWidth: 0.2,
    elevation: 3,
    justifyContent: 'center',
  },

  imageContainer: {
    backgroundColor: '#FECD51',
    height: (310 / 2400) * height,
    width: (350/ 1080) * width,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderRightWidth: 0.02,
    borderLeftWidth: 0.02,
    borderTopWidth: 0.02,
    borderBottomWidth: 0.02,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageProps: {
    height: '60%',
    width: '50%',
  },

  textContainer: {
    position: 'absolute',
    left: '42%',
  },

  textProps: {
    fontFamily: 'Lato-Black',
    fontSize: 20,
  },

})


export default SellerComponent