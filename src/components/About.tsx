import { View, Text, Image, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface AboutProps {
  placeholder: string,
  image: any,
  onPress?: () => void
}

const {width, height} = Dimensions.get('window')

const About: React.FC <AboutProps> = ({
  placeholder,
  image,
  onPress,
}) => {
  return (
    <SafeAreaView style = {styles.containerPositioning}>
      <View style = {styles.container}>
        
      <TouchableOpacity onPress={onPress}>
      <View style = {styles.imageContainer}>
      <Image
        style={styles.imageProps}
        source={image}
      />  
      </View>
      </TouchableOpacity>

      {/* <View style = {styles.placeholderPositioning}> */}
        <View style = {styles.placeholderContainer}> 
          <Text style = {styles.textProps}>{placeholder}</Text>
        </View>
      {/* </View> */}

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    marginVertical: '1.8%',
  },

  containerPositioning: {
    // top: '70%',
    alignSelf: 'center',
    left: '1%'
  },

  placeholderPositioning: {
    // elevation: 2,
  },

  placeholderContainer: {
    marginHorizontal: '3%',
    height: (130 / 2400) * height,
    width: (780/ 1080) * width,
    elevation: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  textProps: {
    alignSelf: 'flex-start',
    fontSize: 14,
    top: '12%',
    left: '3%'
  },  

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    height: (130 / 2400) * height,
    width: (130/ 1080) * width,
    backgroundColor: '#fff'
  },

  imageProps: {
    height: (80 / 2400) * height,
    width: (80/ 1080) * width,
  }, 

})

export default About