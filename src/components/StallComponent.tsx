import { View, Text, Dimensions, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import delivery from '../icons/delivery.png'
import rate from '../icons/rate.png'
import payment from '../icons/payment.png'

const {width, height} = Dimensions.get('window') 

interface StallProps {
  placeholder: string,
  image: any,
}

const StallComponent: React.FC <StallProps> = ({
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
    <View style = {styles.container}>

      <View style = {styles.imageContainer}>
        <Image
        source={image}
        style={styles.imageProps}
        />

      <View style = {styles.detailsProps}>
        <Text style = {styles.titleProps}>
          {placeholder}
        </Text>

        <View style = {styles.deliverySection}>
          
          <Image  
            source={delivery}
          />  
          <Text style = {[styles.subHeader, {marginRight: '5%'}]}>10-15 mins</Text>
          
          <Image
            source={payment}
          />

          <Text style = {styles.subHeader}>P39.00</Text>
        </View>

        <View style = {styles.deliverySection}>
        </View>

      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    top: '12%',
    backgroundColor: '#fff',
    height: (500 / 2400) * height,
    width: (900 / 1080) * width,
    borderRadius: 10,
    elevation: 3,
  },

  imageContainer: {
    // backgroundColor: '#fff123',
    height: (300 / 2400) * height,
    width: (900 / 1080) * width,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  detailsProps: {
    left: '3.5%',
  },

  titleProps: {
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    top: '10%'
  },

  imageProps: {
    alignSelf: 'center',
    height: '100%',
    width: '100%'
  },

  deliverySection: {
    flexDirection: 'row',
    top: '6%',
  },

  subHeader: {
    left: '25%',
    top: '0.5%',
    color: '#A18C8C'
  },

})

export default StallComponent