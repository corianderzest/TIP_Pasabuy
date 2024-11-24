import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import BottomBar from '../components/BottomBarCustomer';
import SearchBar from '../components/SearchBar';
import MealOverview from '../components/MealOverview';
import { firestoreDB } from '../backend/firebaseInitialization';
import { getDoc, getDocs, doc, collection, setDoc } from 'firebase/firestore';
import { RootStackParamList } from '../navigation/NavigationTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getAuth } from 'firebase/auth';

import coffee_1 from '../assets/meals/coffee_1.png';
import coffee_2 from '../assets/meals/coffee_2.png';
import coffee_3 from '../assets/meals/coffee_3.png';
import lemonade from '../assets/meals/lemonade.png';
import gulaman from '../assets/meals/gulaman.png';

const mealImages = {
  't81teUAWsbdLdUZWv6BS': coffee_1,
  'ugrnoBJ2RkDZsMiqRGJ8': coffee_2,
  'ikKE7XSHlfCEb4rExF86': coffee_3,
  'NB2sGtoeLpq4GEMUg07F': gulaman,
  'xiOEaz9lQIf0qVo6BNPI': lemonade,
};

type DrinksPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'DrinksPage'>
}

type MealItem = {
  id: string
  name: string
  description: string
  price: number
  quantity?: number
  image: any
};

const DrinksPage: React.FC <DrinksPageProps> = ({navigation}) => {
  const [addToCart, setAddToCart] = useState<MealItem[]>([]); 
  const [mealDetails, setMealDetails] = useState<MealItem[]>([]); 

  useEffect(() => {
    const fetchMealDetails = async () => {
      const mealDetailsCollection = collection(firestoreDB, 'coffee'); 
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
    const mealDoc = doc(firestoreDB, 'coffee', documentID);
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
        <BottomBar 
        orderPress={() => {navigation.navigate('YourOrderPage')}}
        homePress={() => {navigation.navigate('HomePage')}}
        />
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

export default DrinksPage;
