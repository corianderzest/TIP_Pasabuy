import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('window')

interface CartProps{
  itemName: string,
  price: number,
  quantity: number,
}

const CartComponents: React.FC <CartProps> = ({
  itemName,
  price,
  quantity,
}) => {
  return (
    <SafeAreaView>
      <View style = {styles.quantityContainer}>
        
        <TouchableOpacity>
          <View>
            <Text style = {styles.arithmeticProps}> - </Text>
          </View>
        </TouchableOpacity>
          
        <Text style = {styles.arithmeticProps}>{quantity}</Text>
        
        <TouchableOpacity>
          <View>
            <Text style = {styles.arithmeticProps}> + </Text>
          </View>
        </TouchableOpacity>      
      
      </View>

      <View style = {styles.itemContainer}>
      <Text style = {styles.itemProps}>{itemName}</Text>
      <Text style = {styles.priceProps}>₱{price}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#fff',
    width: (760 / 1080) * width,
    height: (150 / 2400) * height,
    borderRadius: 10,
    left: '25%',
    elevation: 4,
    borderTopWidth: 0.2,
    borderLeftWidth: 0.2,
    borderRightWidth: 0.2,
    // borderBottomWidth: 0.2,
  },

  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: (200 / 1080) * width,
    height: (110 / 2400) * height,
    borderRadius: 12,
    left: '38%',
    top: '1.5%',
    elevation: 5,
    borderTopWidth: 0.2,
    borderLeftWidth: 0.2,
    borderRightWidth: 0.2,
    // borderBottomWidth: 0.1,
  },

  arithmeticProps: {
    fontSize: 17,
    marginHorizontal: 5,
  },

  itemProps: {
    left: '22%'
  },

  priceProps: {
    right: '22%'
  },

})

export default CartComponents