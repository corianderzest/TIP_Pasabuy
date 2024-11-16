import { View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import About from '../components/About'
import SearchBar from '../components/SearchBar'
import BottomBar from '../components/BottomBar'
import Profile from '../icons/profile.png'
import Home from '../icons/home.png'
import Add from '../icons/add.png'
import Order from '../icons/order.png'
import Cart from '../icons/cart.png'
import Edit from '../icons/edit.png'

const {width, height} = Dimensions.get('window')

const AboutPage = () => {
  return (
    <SafeAreaView style = {styles.container}>

      <SearchBar placeholder='Search for your order'/>

      <View style = {styles.bottomBarPositioning}>
        <BottomBar/>
      </View>

      <View style = {styles.headerContainer}>
        <Text style = {styles.headerText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, ex a placerat venenatis, urna turpis imperdiet magna, non feugiat risus neque a nisl. Nam aliquet vehicula tortor, ut interdum elit vehicula ut. Integer in ullamcorper nunc, maximus hendrerit sem. 
        </Text>
      </View>

      <View style = {styles.helpContainer}>
        <About
          placeholder='Lorem Ipsum'
          image={Profile}
        />
        <About
          placeholder='Lorem Ipsum'
          image={Home}
        />
        <About
          placeholder='Lorem Ipsum'
          image={Add}
        />
        <About
          placeholder='Lorem Ipsum'
          image={Order}
        />
        <About
          placeholder='Lorem Ipsum'
          image={Cart}
        />
        <About
          placeholder='Lorem Ipsum'
          image={Edit}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8f7f4',
    // position: 'relative'
  },

  helpContainer: {
    top:'4%'
  },
  
  headerText: {
    fontSize: 15,
    marginHorizontal: '5%',
    marginVertical:'5%',
  },

  headerContainer: {
    top: '2%',
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: (650 / 2400) * height,
    width: (950/ 1080) * width,
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    elevation: 3
  },

  bottomBarPositioning: {
    bottom: '-83%' 
  },

})

export default AboutPage