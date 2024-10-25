import { View, Text, Image, StyleSheet, Dimensions, Animated, Modal } from 'react-native'
import React, { useRef, useEffect, useState } from 'react';
import Buttons from '../components/Buttons'
import Inputs from '../components/Inputs'
import sample_logo from '../assets/images/sample_logo.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackParamList } from '../navigation/NavigationTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const {width, height} = Dimensions.get('window')

type LoginPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LoginPage'> 
}

const LoginPage: React.FC <LoginPageProps> = ({navigation}) => {

  const [isModalVisible, setIsModalVisible] = useState(false)

  const slideAnimLeft = useRef(new Animated.Value(-width)).current; 
  const slideAnimRight = useRef(new Animated.Value(+width)).current; 



  //animation for logo
  useEffect(() => {
    Animated.timing(slideAnimLeft, {
      toValue: 0, 
      duration: 1000,
      useNativeDriver: true,  
    }).start();
  }, [slideAnimLeft]);

  //animation for remaining elements: input, texts, button, etc
  useEffect(() => {
    Animated.timing(slideAnimRight, {
      toValue: 0, 
      duration: 1000,
      useNativeDriver: true,  
    }).start();
  }, [slideAnimRight]);

  return (
    <SafeAreaView style = {styles.container}>
    <View style = {styles.positioningContainer}>
      <View style = {styles.imagePosition}>
        <Animated.View style={[styles.imageContainer, { transform: [{ translateX: slideAnimLeft }] }]}>
            <Image
            source={sample_logo}
            style = {styles.imageProperties}
            />
        </Animated.View>
      </View>    

      <Animated.View style={{ transform: [{ translateY: slideAnimRight }]}}>
      <View style = {styles.textContainer}>
          <Text style = {styles.headingText}>
            Welcome Back TIPian!
          </Text>

        <View style = {styles.subheaderContainer}>
          <Text style = {styles.subheadingText}>
            Sign in to continue, make sure to avoid 
            typographical errors and check for caps lock.
          </Text>
        </View>
      </View>
  
      <View style = {styles.inputContainer}>
        <View style = {styles.inputSpacing}> 
          <View style = {styles.inputStyling}>
            <Inputs
              placeholder='Enter your school ID'  
              type = 'account'/>
          </View>
        </View>

        <View style = {styles.inputSpacing}>
          <View style = {styles.inputStyling}>
            <Inputs
              placeholder='Enter your username'  
              type = 'account'/>
          </View>
        </View>

        <View style = {styles.inputSpacing}>
          <View style = {styles.inputStyling}>
            <Inputs
              placeholder='Enter your password'  
              type = 'account'
            />
          </View>
        </View>
      </View>

      <View style = {styles.buttonContainer}>
        <View style = {styles.buttonStyling}>
        <Buttons
          placeholder='Login'
          backgroundColor='yellow'
          text_color='black'
          text_style='bold'
          size='custom'
          onPress = {() => navigation.navigate('LoginModal')}
        />
        </View>
      </View>

      <View style = {styles.forgotContainer}>
          <Text style = {styles.forgotProps}>
              Forgot Password?
          </Text>
      </View>
      </Animated.View>
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
    left: '2%',
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

export default LoginPage