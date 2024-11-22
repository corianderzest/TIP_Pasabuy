import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import BottomBar from '../components/BottomBar';
import Animation from '../components/Animation';
import foodcourt from '../assets/images/foodcourt.png';
import foods from '../assets/images/foods.png';
import drinks from '../assets/images/drinks.png';
import popular_1 from '../assets/images/popular_1.jpg';
import popular_2 from '../assets/images/popular_2.jpg';
import popular_3 from '../assets/images/popular_3.jpg';
import popular_4 from '../assets/images/popular_4.jpg';
import popular_5 from '../assets/images/popular_5.jpg';
import promo from '../assets/images/promo.jpg'
import promo_1 from '../assets/images/promo_1.jpg'
import promo_2 from '../assets/images/promo_2.jpg'
import { useFonts } from 'expo-font';
import FoodPage from './FoodPage';
import DrinksPage from './DrinksPage';
import ProfilePage from './ProfilePage';
import StallsPage from './StallsPage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/NavigationTypes';

type HomePageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomePage'>;
}


export const profileRedirect: React.FC <HomePageProps> = ({navigation}) => {
    navigation.navigate('ProfilePage')
    return null
  }

const promo_images = [
  { id: '1', uri: promo },
  { id: '2', uri: promo_1 },
  { id: '3', uri: promo_2 },
];

const popular_images = [
  { id: '1', uri: popular_1},
  { id: '2', uri: popular_2},
  { id: '3', uri: popular_3},
  { id: '4', uri: popular_4},
  { id: '5', uri: popular_5},
];

const Homepage: React.FC<HomePageProps> = ({navigation}) => {

  const foodRedirect = () => {
    navigation.navigate('FoodPage')
  }

  const drinkRedirect = () => {
    navigation.navigate('DrinksPage')
  }

  const stallRedirect = () => {
    navigation.navigate('StallsPage')
  }

  const profileRedirect = () => {
    navigation.navigate('ProfilePage')
  }

  const cartRedirect = () => {
    navigation.navigate('CartPage')
  }

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
      <SearchBar 
      placeholder="Search for your order" 
      profilePress={profileRedirect}
      cartPress={cartRedirect}
      />

      <View style = {styles.bottomBarPositioning}>
        <BottomBar/>
      </View>

      <View style={styles.promoWrapperPosition}>
        <View style={styles.promoScrollWrapper}>
          <View style={styles.scrollHeaderContainer}>
            <Text style={styles.scrollHeaderText}>News and Promos</Text>
          </View>
          <Animation images={promo_images} />
        </View>
      </View>

      <View style={styles.popularWrapperPosition}>
        <View style={styles.popularScrollWrapper}>
          <View style={styles.scrollHeaderContainer}>
            <Text style={styles.scrollHeaderText}>Hot & Popular</Text>
          </View>
          <Animation images={popular_images} />
        </View>
      </View>

      <TouchableOpacity 
      onPress={stallRedirect}
      style={styles.stallContainer}>
        <View style={styles.stallHeaderContainer}>
        <Text style={styles.mealHeaderText}>Stalls</Text>
        <Text style={styles.subHeaderText}>tap to view</Text>
        </View>
        <Image
          style={styles.foodcourtProps}
          source={foodcourt}
        />
      </TouchableOpacity>

      <TouchableOpacity 
      onPress = {foodRedirect}
      style = {styles.foodContainer}>
          <View style={styles.stallHeaderContainer}>
            <Text style={styles.mealHeaderText}>Foods</Text>
            <Text style={styles.subHeaderText}>tap to view</Text>
          </View>
        <Image
          style={styles.mealImageProps}
          source={foods}
        />
      </TouchableOpacity>

      <TouchableOpacity 
      onPress = {drinkRedirect}
      style = {styles.drinkContainer}>
          <View style={styles.stallHeaderContainer}>
            <Text style={styles.mealHeaderText}>Drinks</Text>
            <Text style={styles.subHeaderText}>tap to view</Text>
          </View>
        <Image
          style={styles.mealImageProps}
          source={drinks}
        />
        </TouchableOpacity>

    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8f7f4',
    alignItems: 'center',
  },

  scrollHeaderContainer: {
    left: '4%',
    top: '4%',
  },

  scrollHeaderText: {
    fontSize: 17,
    fontFamily: 'Lato-Regular',
    textShadowColor: '#d1ab92',
    textShadowOffset: { width: -0.6, height: 0.8 }, 
    textShadowRadius: 1,
  },

  mealHeaderText: {
    fontSize: 23,
    fontFamily: 'Lato-Black',
    color: '#faf5f2',
    textShadowColor: '#302219',
    textShadowOffset: { width: 0.4, height: 0.2 }, 
    textShadowRadius: 4,
  },

  subHeaderText: {
    color: '#faf5f2',
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    textShadowColor: '#302219',
    textShadowOffset: { width: 0.4, height: 0.2 }, 
    textShadowRadius: 4,
  },

  promoWrapperPosition: {
    top: '2%',
  },

  popularWrapperPosition: {
    bottom: "20.8%"
  },

  promoScrollWrapper: {
    height: '50%',
    width: '90%',
    backgroundColor: '#FECD51',
    borderRadius: 20,
    overflow: 'hidden',
    borderTopLeftRadius: 1,
    elevation: 8,
  },

  popularScrollWrapper: {
    height: '44%',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    borderTopLeftRadius: 1,
    elevation: 8,
  },

  stallHeaderContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: "27%",
    left: "28%",
    zIndex: 1,
  },

  stallContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: "43.5%",
    left: "25%",
    height: "30%",
    width: "40%",
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 2,
  },

  foodcourtProps: {
    top: "0%",
    height: "100%",
    width: "103%",
    resizeMode: 'cover',
    opacity: 0.95,
  },

  foodContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: "73.4%",
    right: "21.5%",
    height: "14.5%",
    width: "47.5%",
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 2,
  },

  mealImageProps: {
    top: "0%",
    height: "107%",
    width: "100%",
    resizeMode: 'cover',
    opacity: 0.95,
  },

  drinkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: "72.35%",
    right: "21.5%",
    height: "14.5%",
    width: "47.5%",
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 2,
  },

  bottomBarPositioning: {
    bottom: '-83%'
  },

});

export default Homepage;
