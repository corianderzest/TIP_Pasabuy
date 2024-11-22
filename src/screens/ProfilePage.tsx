import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import BottomBar from '../components/BottomBarCustomer'
import ProfileClickables from '../components/ProfileClickables'
import address from '../icons/profileicons/address.png'
import help from '../icons/profileicons/help.png'
import history from '../icons/profileicons/history.png'
import logout from '../icons/profileicons/logout.png'
import name from '../icons/profileicons/name.png'
import photo from '../icons/profileicons/photo.png'
import { useFonts } from 'expo-font'

const { width, height } = Dimensions.get('window')

const ProfilePage = () => {

  const [fonts] = useFonts({
    'Lato-Bold': require('../assets/fonts/Lato/Lato-Bold.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato/Lato-Regular.ttf'),
    'Lato-Black': require('../assets/fonts/Lato/Lato-Black.ttf')
  })

  if (!fonts) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar placeholder='Search for your order' />

      <View style={styles.bottomBarPositioning}>
        <BottomBar />
      </View>

      <View style={styles.imageContainer}>
        <Image

        />
      </View>

      <View style={styles.detailsProps}>
        <Text style={styles.textStyle}>Rod Vince Manzon</Text>
        <Text style={styles.subtextStyle}>Delivery Address</Text>
      </View>

      <View style={styles.clickablesContainer}>



        <ProfileClickables
          placeholder='Transaction History'
          image={history}
        />

        <View style = {styles.helpSpace}>
          <ProfileClickables
            placeholder='Help'
            image={help}
          />
        </View>

        <View style={styles.spacing}>
          <ProfileClickables
            placeholder='Logout Account'
            image={logout}
          />
        </View>
      </View>

      <View style={styles.bottomTextPositioning}>
        <Text style={styles.bottomText}>Made by Moby</Text>
        <Text style={styles.bottomText}>2024</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f8f7f4'
  },

  helpSpace: {
    top: '8%'
  },

  imageContainer: {
    top: '3%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    height: (400 / 2400) * height,
    width: (350 / 1080) * width
  },

  bottomText: {
    color: '#A18C8C',
    fontSize: 1,
    textAlign: 'center',
  },

  bottomTextPositioning: {
    alignSelf: 'center',
    flexDirection: 'column',
    top: '9%'
  },

  spacing: {
    top: '47%'
  },

  detailsProps: {
    top: '5%',
  },

  subtextStyle: {
    color: '#A18C8C',
    alignSelf: 'center',
    top: '3%',
  },

  textStyle: {
    alignSelf: 'center',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
  },

  clickablesContainer: {
    top: '8%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: (900 / 1080) * width,
    height: (550 / 2400) * height,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 2,
  },

  bottomBarPositioning: {
    bottom: '-83%',
  },

})

export default ProfilePage