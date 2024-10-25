import { View, Text, Image, StyleSheet, Dimensions, Animated, Modal } from 'react-native'
import React, { useRef, useEffect, useState } from 'react';
import Buttons from '../components/Buttons'
import loginPreviewPhoto from '../assets/images/loginPreviewPhoto.png'
import Inputs from '../components/Inputs'
import sample_logo from '../assets/images/sample_logo.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackParamList } from '../navigation/NavigationTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RegisterPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RegisterPage'>;
}

const {width, height} = Dimensions.get('window')

const RegisterPage: React.FC <RegisterPageProps> = ({navigation}) => {

  const [isModalVisible, setIsModalVisible] = useState(true)

  return (
    <SafeAreaView style = {styles.container}>
    <View style = {styles.positioningContainer}>

      <View style = {styles.imagePosition}>
        <View style= {styles.imageContainer}>
            <Image
            source={sample_logo}
            style = {styles.imageProperties}
            />
        </View>
      </View>    

      <View style = {styles.textContainer}>
          <Text style = {styles.headingText}>
            Welcome to TIP Pasabuy!
          </Text>

        <View style = {styles.subheaderContainer}>
          <Text style = {styles.subheadingText}>
            Sign up to create an account, make sure to 
            remember all the credentials you input.
          </Text>
        </View>
      </View>
  
      <View style = {styles.inputContainer}>
        <View style = {styles.inputSpacing}> 
          <View style = {styles.inputStyling}>
            <Inputs
              placeholder='Enter desired school ID'  
              type = 'account'/>
          </View>
        </View>

        <View style = {styles.inputSpacing}>
          <View style = {styles.inputStyling}>
            <Inputs
              placeholder='Enter desired username'  
              type = 'account'/>
          </View>
        </View>

        <View style = {styles.inputSpacing}>
          <View style = {styles.inputStyling}>
            <Inputs
              placeholder='Enter desired password'  
              type = 'account'
            />
          </View>
        </View>
      </View>

      <View style = {styles.buttonContainer}>
        <View style = {styles.buttonStyling}>
        <Buttons
          placeholder='Register'
          backgroundColor='yellow'
          text_color='black'
          text_style='bold'
          size='custom'
          onPress={() => { 
            console.log('ayaw gumana hayop') 
            navigation.navigate('RegisterModal')}}/>
          </View>
      </View>

      <View style = {styles.forgotContainer}>
          <Text style = {styles.forgotProps}>
              Have an account?
          </Text>
      </View>
    </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    position: 'relative',
    backgroundColor: "#F8F7F4",
    alignItems: 'center',
    left: '0.5%',
  },

  positioningContainer: {
    top: '25%',
  },

  imagePosition: {
    alignItems: 'center'
  },

  imageContainer: {
    position: 'absolute',   
    bottom: '100%',
  },
  
  imageProperties: {
    width: (600 / 1080) * width,
    height: (500 / 2400) *height,
  },

  textContainer: {
    marginTop: 20,
    paddingLeft: 20,
  },

  subheaderContainer: {
    marginTop: 2,
    paddingRight: 40,
  },

  headingText: {
    fontSize: 27,
    fontWeight: '900'
  },

  subheadingText: {
    fontSize: 15,
    fontWeight: '400'
  },

  inputContainer: {
    left: '5%',
    top: '1%',
    marginVertical: 12,
  },

  inputStyling: {
      elevation: 3,
      borderRadius: 8,
      width: (822 / 1080) * width, 
      height: (128 / 2400) * height, 
  },

  inputSpacing: {
    marginBottom: 12,
  },

  buttonContainer: {
    left: '55.5%',
    top: '0%',
  },

  buttonStyling: {

  },

  forgotContainer: {
    left: '6%',
    top: '-9%',
    
  },

  forgotProps: {
    fontWeight: '400',
    fontSize: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    color: 'black',
  },
})

export default RegisterPage