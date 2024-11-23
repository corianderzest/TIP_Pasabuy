import { View, Text, StyleSheet, Dimensions, Image, SafeAreaView} from 'react-native'
import React from 'react'
import order from "../icons/order.png"
import home from "../icons/home.png"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const {width, height} = Dimensions.get('window')

interface BottomBarProps{
 orderPress?: () => void,
 homePress?: () => void
}

const BottomBar: React.FC <BottomBarProps> = ({
  orderPress,
  homePress
}) => {
  return (
    <SafeAreaView style = {styles.containerPositioning}>
      <View style = {styles.container}>
        <View style = {styles.positioning}>

          <View style = {styles.orderContainer}>
          <TouchableWithoutFeedback onPress={orderPress}>
            <Image
              style={styles.imageProps}
              source={order}/>
            <Text style = {styles.textProps}>Orders</Text>
          </TouchableWithoutFeedback>
          </View>

          <View style = {styles.orderContainer}>
          <TouchableWithoutFeedback onPress={homePress}>
            <Image
              style={styles.imageProps}
              source={home}/>
            <Text style = {styles.textProps}>Home</Text>
          </TouchableWithoutFeedback>
          </View>

        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
  containerPositioning: {
    position: 'absolute',
    backgroundColor: "#F3C623",
    width: '136%',
    height: (205 / 2400) * height,
    justifyContent: 'flex-end',
    zIndex: 1,
    alignSelf: 'center',
  },
  
  container: {

  },

  positioning: {
    top: '-16.5%',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  textProps: {
    left: '-7%',
    fontSize: 13,
  },

  orderContainer: {
    left: '5%',    
    top: '15%',
    marginHorizontal: '11%',
  },

  imageProps: {
    height: 31,
    width: 31,  
  }
})

export default BottomBar