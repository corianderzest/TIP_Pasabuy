import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import SearchBar from '../components/SearchBar';
import BottomBar from '../components/BottomBar';
import Animation from '../components/Animation';
import modal_background from '../assets/images/modal_background.jpg';
import loginPreviewPhoto from '../assets/images/loginPreviewPhoto.png';
import newspreview from "../assets/images/newspreview.png";
import foodcourt from "../assets/images/foodcourt.png"
import foods from "../assets/images/foods.png"
import drinks from "../assets/images/drinks.png"


const promo_images = [
  { id: '1', uri: modal_background },
  { id: '2', uri: loginPreviewPhoto },
  { id: '3', uri: newspreview },
];

const Homepage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar placeholder="Search for your order" />

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
          <Animation images={promo_images} />
        </View>
      </View>

      <View style={styles.stallContainer}>
        <View style={styles.stallHeaderContainer}>
        <Text style={styles.scrollHeaderText}>Stalls</Text>
        </View>
        <Image
          style={styles.foodcourtProps}
          source={foodcourt}
        />
      </View>

      <View style = {styles.foodContainer}>
          <View style={styles.stallHeaderContainer}>
            <Text style={styles.scrollHeaderText}>Foods</Text>
          </View>
        <Image
          style={styles.mealImageProps}
          source={foods}
        />
      </View>

      <View style = {styles.drinkContainer}>
          <View style={styles.stallHeaderContainer}>
            <Text style={styles.scrollHeaderText}>Drinks</Text>
          </View>
        <Image
          style={styles.mealImageProps}
          source={drinks}
        />
        </View>

        

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
    fontSize: 18,
    fontWeight: 'bold',
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
    backgroundColor: '#FECD51',
    borderRadius: 20,
    overflow: 'hidden',
    // borderTopWidth: 0.2,
    // borderLeftWidth: 0.2,
    // borderRightWidth: 0.4,
    // borderBottomWidth: 0.4,
    borderTopLeftRadius: 1,
    elevation: 8,
  },

  stallHeaderContainer: {
    top: "3%",
    left: "9%"
  },

  stallContainer: {
    bottom: "43.5%",
    left: "25%",
    height: "30%",
    width: "40%",
    backgroundColor: "#FECD51",
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 2,
  },

  foodcourtProps: {
    top: "7%",
    height: "88%",
    width: "103%",
    resizeMode: 'cover'
  },

  foodContainer: {
    bottom: "73.4%",
    right: "21.5%",
    height: "14.5%",
    width: "47.5%",
    backgroundColor: "#FECD51",
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 2,
  },

  mealImageProps: {
    top: "7%",
    height: "94%",
    width: "100%",
    resizeMode: 'cover'
  },

  drinkContainer: {
    bottom: "72.35%",
    right: "21.5%",
    height: "14.5%",
    width: "47.5%",
    backgroundColor: "#FECD51",
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 2,
  },

  bottomBarPositioning: {
    left: '-70%',
    bottom: '-83%'
  },

});

export default Homepage;
