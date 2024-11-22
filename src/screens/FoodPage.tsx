import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import BottomBar from '../components/BottomBarCustomer';
import SearchBar from '../components/SearchBar';
import MealOverview from '../components/MealOverview';
import { firestoreDB } from '../backend/firebaseInitialization';
import { setDoc, getDoc, getDocs, doc, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { RootStackParamList } from '../navigation/NavigationTypes';
import { StackNavigationProp } from '@react-navigation/stack';

import food_1 from '../assets/meals/food_1.png';
import food_2 from '../assets/meals/food_2.png';
import food_3 from '../assets/meals/food_3.png';
import food_4 from '../assets/meals/food_4.png';
import food_5 from '../assets/meals/food_5.png';
import ProfilePage from './ProfilePage';
import CartPage from './CartPage';

type FoodProps = {
  navigation: StackNavigationProp<RootStackParamList, 'FoodPage'>
}

const mealImages = {
  'pN6O9IQsAQ5RNSVGaFno': food_1,
  'eI8y2D2OgkkGMjp9sJSG': food_2,
  'dSTeVcN9ju0fAEP0cS3y': food_3,
  '0tfZLleJcmTgdRLXiyjs': food_4,
  'jhPpkZOVVHT5IVyKbwkW': food_5,
};

type MealItem = {
  id: string
  name: string
  description: string
  price: number
  quantity?: number
  image: any
};

const FoodPage: React.FC <FoodProps> = ({navigation}) => {
  const [addToCart, setAddToCart] = useState<MealItem[]>([]); 
  const [mealDetails, setMealDetails] = useState<MealItem[]>([]); 

  useEffect(() => {
    const fetchMealDetails = async () => {
      const mealDetailsCollection = collection(firestoreDB, 'food'); 
      const mealGetDocs = await getDocs(mealDetailsCollection);

      const mealList: MealItem[] = mealGetDocs.docs.map((doc) => {
        const data = doc.data();
        const mealId = doc.id;

        const image = mealImages[mealId]; 

        return {
          id: mealId,
          name: data.name,
          description: data.description,
          price: data.price,
          quantity: data.quantity,
          image: image,
        };
      });

      setMealDetails(mealList); 
    };

    fetchMealDetails();
  }, []);

  // Handle meal selection to add to cart
  const getMeal = async (documentID: string) => {
    const mealDoc = doc(firestoreDB, 'food', documentID);
    const docSnapshot = await getDoc(mealDoc);

     try {
    if (docSnapshot.exists()) {
      const mealData = { ...docSnapshot.data(), id: docSnapshot.id } as MealItem;
      const user = getAuth().currentUser;
      if (user) {
        const cartRef = collection(firestoreDB, 'cart', user.uid, 'cartItems');
        await setDoc(doc(cartRef), { ...mealData, quantity: 1 }); 
        console.log('Added to Cart Successfully:', mealData);
      } else {
        console.log('User is not logged in');
      }
    } else {
      console.log('No such document!');
    }
  } catch (err) {
    console.error(err);
  }
};

  const profileRedirect = () => {
    navigation.navigate('ProfilePage')
  }

  const cartRedirect = () => {
    navigation.navigate('CartPage')
  }

  //   try {
  //     if (docSnapshot.exists()) {
  //       const mealData = { ...docSnapshot.data(), id: docSnapshot.id } as MealItem;
  //       setAddToCart((prev) => [...prev, mealData]);
  //       console.log('Added Successfully:', mealData);
  //     } else {
  //       console.log('No such document!');
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar 
      placeholder="Search for your order" 
      profilePress={profileRedirect}
      cartPress={cartRedirect}/>

      {mealDetails.map((meal, index) => (
        <View key={meal.id} style={[styles.mealContainer, { top: `${11.5 + 16 * index}%`, alignSelf: 'center' }]}>
          <MealOverview 
            onPress={() => getMeal(meal.id)} 
            name={meal.name}
            description={meal.description}
            price={meal.price}
            image={meal.image} 
          />
        </View>
      ))}

      <View style={styles.bottomBarPositioning}>
        <BottomBar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8f7f4',
  },
  mealContainer: {
    position: 'absolute',
  },
  bottomBarPositioning: {
    bottom: '-83%',
  },
});

export default FoodPage;