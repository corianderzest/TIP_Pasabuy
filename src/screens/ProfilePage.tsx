import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
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
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../navigation/NavigationTypes'
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../backend/firebaseInitialization'
import { firestoreDB } from '../backend/firebaseInitialization'
import {collection, getDocs} from 'firebase/firestore'
import { useEffect } from 'react'
import profilesample from '../icons/profileicons/profilesample.png'

type ProfileProps = {
  navigation: StackNavigationProp<RootStackParamList, 'ProfilePage'>
}

const { width, height } = Dimensions.get('window')

const ProfilePage: React.FC <ProfileProps> = ({navigation}) => {

  const profileRedirect = () => {
    navigation.navigate('ProfilePage')
  }

  const cartRedirect = () => {
    navigation.navigate('CartPage')
  }

  const user = getAuth().currentUser
  const [name, setName] = useState<string>('')
  const [address, setAddress] = useState<string>('')

  const [fonts] = useFonts({
    'Lato-Bold': require('../assets/fonts/Lato/Lato-Bold.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato/Lato-Regular.ttf'),
    'Lato-Black': require('../assets/fonts/Lato/Lato-Black.ttf')
  })

  if (!fonts) {
    return null
  }

  const logoutRedirect = async () => {
     try {
    const auth = getAuth(app); 
    await signOut(auth); 
    console.log('User logged out successfully');
    navigation.navigate('WelcomePage');  
  } catch (error) {
    console.error('Error logging out: ', error);  
  }
  }

  useEffect(() => {
    const fetchUserData = async() => {
      if(user){
        try{
          const userRef = collection(firestoreDB, 'users')
          const userSnap = await getDocs(userRef)

          userSnap.docs.forEach((doc)=> {
            const data = doc.data()
            const name = data.name
            const address = data.address

            setName(name)
            setAddress(address)
          })
        } catch(err){
          console.error('error fetching user credentials... ', err)
        }
      }else{
        console.log('')
      }
    }
    fetchUserData()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar 
      placeholder="Search for your order" 
      profilePress={profileRedirect}
      cartPress={cartRedirect}/>

      <View style={styles.bottomBarPositioning}>
        <BottomBar 
        orderPress={() => {navigation.navigate('YourOrderPage')}}
        homePress={() => {navigation.navigate('HomePage')}}
        />
      </View>

      {/* <View style={styles.imageContainer}> */}
        <Image
          style={styles.imageContainer}
          source={profilesample}
        />
      {/* </View> */}

      <View style={styles.detailsProps}>
        <Text style={styles.textStyle}>{name}</Text>
        <Text style={styles.subtextStyle}>{address}</Text>
      </View>

      <View style={styles.clickablesContainer}>



        <ProfileClickables
          placeholder='Transaction History'
          image={history}
          onPress={() => {navigation.navigate('TransactionHistory')}}
        />

        <View style = {styles.helpSpace}>
          <ProfileClickables
            placeholder='Help'
            image={help}
            onPress={() => {navigation.navigate('AboutPage')}}
          />
        </View>

        <View style={styles.spacing}>
          <ProfileClickables
            placeholder='Logout Account'
            image={logout}
            onPress={logoutRedirect}
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
    marginTop: '5%',
    top: '2%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    height: (380 / 2400) * height,
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