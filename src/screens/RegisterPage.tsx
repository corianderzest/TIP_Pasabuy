import { View, Text, Image, StyleSheet, Dimensions, Animated, Modal, KeyboardAvoidingView } from 'react-native'
import React, { useRef, useEffect, useState } from 'react';
import Buttons from '../components/Buttons'
import loginPreviewPhoto from '../assets/images/loginPreviewPhoto.png'
import Inputs from '../components/Inputs'
import sample_logo from '../assets/images/sample_logo.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackParamList } from '../navigation/NavigationTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

type RegisterPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RegisterPage'>;
}

const {width, height} = Dimensions.get('window')

const RegisterPage: React.FC <RegisterPageProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();

  const registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registration successful');
      navigation.navigate('RegisterModal');  // Navigate to modal on success
    } catch (error: any) {
      console.error('Registration failed:', error.message);
    }
  };


  return (
    <KeyboardAvoidingView style = {styles.container}>
      <SafeAreaView style = {styles.positioningContainer}>

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
                placeholder='Enter desired email'  
                type = 'account'
                onChangeText={text => setEmail(text)}/>
            </View>
          </View>

          <View style = {styles.inputSpacing}>
            <View style = {styles.inputStyling}>
              <Inputs
                placeholder='Enter desired password'  
                type = 'account'
                secureTextEntry
                onChangeText={text => setPassword(text)}
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
              console.log(email)
              console.log(password)
              registerUser()}}/>
            </View>
        </View>

        <View style = {styles.forgotContainer}>
            <Text style = {styles.forgotProps}>
                Have an account?
            </Text>
        </View>

      </SafeAreaView>
    </KeyboardAvoidingView>
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
    top: '26%',
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