import { View, Text, Image, StyleSheet, Dimensions, Animated, Modal, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useRef, useEffect, useState } from 'react';
import Buttons from '../components/Buttons'
import loginPreviewPhoto from '../assets/images/loginPreviewPhoto.png'
import Inputs from '../components/Inputs'
import sample_logo from '../assets/images/sample_logo.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackParamList } from '../navigation/NavigationTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore'

type RegisterPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RegisterPage'>;
}

const {width, height} = Dimensions.get('window')

const RegisterPage: React.FC <RegisterPageProps> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [contact, setContact] = useState<any>('');

  const auth = getAuth();
  const firestoreDB = getFirestore();

  const registerUser = async (email: string, name:string, address: string, contact: any) => {
    try {
      const credentials = await createUserWithEmailAndPassword(auth, email, password);
      const user = credentials.user

      await setDoc(doc(firestoreDB, 'users', user.uid), {
        email,
        name,
        address,
        contact,
      })

      console.log('Registration successful');
      navigation.navigate('RegisterModal'); 
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

           <View style = {styles.inputSpacing}>
            <View style = {styles.inputStyling}>
              <Inputs
                placeholder='Enter Profile Name'  
                type = 'account'
                onChangeText={text => setName(text)}/>
            </View>
          </View>

          <View style = {styles.inputSpacing}>
            <View style = {styles.inputStyling}>
              <Inputs
                placeholder='Enter Contact No.'  
                type = 'account'
                onChangeText={text => setContact(text)}/>
            </View>
          </View>

           <View style = {styles.inputSpacing}>
            <View style = {styles.inputStyling}>
              <Inputs
                placeholder='Enter Address'  
                type = 'account'
                onChangeText={text => setAddress(text)}/>
            </View>
          </View>

        </View>

        
        <TouchableOpacity>
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
              registerUser(email, name, address, contact)}}/>
            </View>
        </View>
              </TouchableOpacity>

        <View style = {styles.forgotContainer}>
          <TouchableOpacity onPress={() => {navigation.navigate('LoginPage')}}>
            <Text style = {styles.forgotProps}>
                Have an account?
            </Text>
          </TouchableOpacity>
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
    top: '20%',
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
    left: '64%',
    top: '0%',
  },

  buttonStyling: {

  },

  forgotContainer: {
    left: '6%',
    top: '-6%',
    
  },

  forgotProps: {
    fontWeight: '400',
    fontSize: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    color: 'black',
  },
})

export default RegisterPage