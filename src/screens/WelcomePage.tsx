import { View, Text, StyleSheet, Image, Dimensions, Linking, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import sample_logo from '../assets/images/sample_logo.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/NavigationTypes';
import Buttons from '../components/Buttons'
import facebook from "../icons/facebook.png"
import instagram from "../icons/instagram.png"
import twitterx from "../icons/twitterx.png"

const {height, width} = Dimensions.get('window')

type WelcomePageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'WelcomePage'>;
}

const WelcomePage: React.FC <WelcomePageProps> = ({navigation}) => {

  const redirect = (url: string): void => {
        Linking.openURL(url).catch(err => console.error("Check if url is valid!", err));
    };

  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.imageContainer}>
        <Image
        source={sample_logo}
        style = {styles.imageProperties}
        />
      </View>

      <View style = {styles.smallYellowCircle}/>
      <View style = {styles.bigYellowCircle}/>
      <View style = {styles.smallBlackCircle}/>
      <View style = {styles.bigBlackCircle}/>
      
      <View style = {styles.textContainer}>
        <Text style = {styles.textStyle}>
          Especially made for TIPians
        </Text>
      </View>

      <View style = {styles.buttonContainer}>
        <View style = {styles.loginContainer}>
          <Buttons
            placeholder='Login'
            backgroundColor='black'
            text_color="white"
            size="xl"
            text_style="bold"
            onPress={() => navigation.navigate('LoginPage')}
          />
        </View>
        <View style = {styles.registerContainer}>
        <Buttons
            placeholder='Register'
            backgroundColor='yellow'
            text_color="black"
            size="xl"
            text_style="bold"
            onPress={() => navigation.navigate('RegisterPage')} 
          />
        </View>
      </View>

      <View style = {styles.updateContainer}>
        <Text style = {styles.textUpdateContainer}>
          For updates visit us at: 
        </Text>

      <View style = {styles.socialsContainer}>
        <TouchableWithoutFeedback
        onPress={() => redirect('https://www.facebook.com')}>
        <Image
          source={facebook}
        />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
        onPress={() => redirect('https://www.x.com')}>
        <Image
          source={twitterx}
        />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
        onPress={() => redirect('https://www.instagram.com')}>
        <Image
          source={instagram}
        />
        </TouchableWithoutFeedback>
      </View>
      </View>
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: "#F8F7F4"
    // flexDirection: 'column'
  },

  imageContainer: {
    position: 'absolute',   
    top: 150,
    // marginVertical: 15,
  },
  
  imageProperties: {
    width: (600 / 1080) * width,
    height: (500 / 2400) *height,
  },

  smallYellowCircle: {
    position: 'absolute',
    top: 110,
    left: 100,
    width: 40,
    height: 40,
    backgroundColor: '#F3C623',
    borderRadius: 100,
  },

  bigYellowCircle: {
    position: 'absolute',
    top: 20,
    right: -18,
    width: 70,
    height: 70,
    backgroundColor: '#F3C623',
    borderRadius: 100,
  },

  smallBlackCircle: {
    position: 'absolute',
    top: -15,
    left: -15,
    width: 70,
    height: 70,
    backgroundColor: '#000000',
    borderRadius: 100,
  },

  bigBlackCircle: {
    position: 'absolute',
    top: 310,
    right: 40,
    width: 35,
    height: 35,
    backgroundColor: '#000000',
    borderRadius: 100,
  },

  textContainer: {
    position: 'absolute',
    alignItems: 'center',

  },

  textStyle: {
    fontWeight: '800',
    fontSize: 17,
  },

  buttonContainer: {
    top: '62%',
  },

  loginContainer: {
    marginTop: 10,
  },

  registerContainer: {
    marginTop: 10
  },

  updateContainer: { 
    top: '75%'
  },

  textUpdateContainer: {
    fontSize: 15,
    fontWeight: '400'
  },

  socialsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 50,
  }

});

export default WelcomePage;
