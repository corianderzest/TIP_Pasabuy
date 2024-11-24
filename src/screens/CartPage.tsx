import { View, Text, Dimensions, SafeAreaView, StyleSheet, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import SearchBar from '../components/SearchBar';
import BottomBar from '../components/BottomBarCustomer';
import CartComponents from '../components/CartComponents';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/NavigationTypes';
import Buttons from '../components/Buttons';
import { firestoreDB } from '../backend/firebaseInitialization';
import { collection, getDocs, setDoc, doc, deleteDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import firestore from '@react-native-firebase/firestore';

type CartPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CartPage'>;
};

interface Item {
  id: string;
  title: string;
  description: string;
}

const { width, height } = Dimensions.get('window');

const CartPage: React.FC<CartPageProps> = ({ navigation }) => {
  const [fonts] = useFonts({
    'Lato-Bold': require('../assets/fonts/Lato/Lato-Bold.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato/Lato-Regular.ttf'),
    'Lato-Black': require('../assets/fonts/Lato/Lato-Black.ttf'),
  });

  if (!fonts) {
    return null;
  }

  const profileRedirect = () => {
    navigation.navigate('ProfilePage');
  };

  const checkoutRedirect = () => {
    navigation.navigate('CheckoutPage')
    console.log('Click success redirect to checkout page')  
  }


  const [cartItems, setCartItems] = useState<any[]>([]); // store the items
  const [totalAmount, setTotalAmount] = useState(0);


  useEffect(() => {
    const fetchCartItems = async () => {
      const user = getAuth().currentUser;
      if (user) {
        // doc ref
        const cartRef = collection(firestoreDB, 'cart', user.uid, 'cartItems');
        try {
          const cartSnapshot = await getDocs(cartRef);
          const cartList = cartSnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              name: data.name,
              description: data.description,
              price: data.price,
              quantity: data.quantity || 1, 
              image: data.image,
            };
          });
          setCartItems(cartList);

          //  total
          const total = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
          setTotalAmount(total);
        } catch (err) {
          console.error('Error fetching cart items:', err);
        }
      } else {
        console.log('User is not logged in');
      }
    };

    fetchCartItems();
  }, []);

// dynamic total calculator
const calculateTotalAmount = (items: any[]) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  setTotalAmount(total);
  updateTotalInDatabase(total);
};

// increment calculator
const increment = (itemId: string) => {
  setCartItems((prevItems) => {
    const updatedItems = prevItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    calculateTotalAmount(updatedItems);
    updateItemInDatabase(itemId, updatedItems.find(item => item.id === itemId)?.quantity || 1);
    return updatedItems;
  });
};

// decrement calculator
const decrement = async (itemId: string) => {
  setCartItems((prevItems) => {
    const updatedItems = prevItems
      .map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => {
        if (item.id === itemId && item.quantity <= 0) {
          removeFromDatabase(itemId); 
          return false; 
        }
        return true;
      });
    calculateTotalAmount(updatedItems);
    if (updatedItems.find(item => item.id === itemId)?.quantity) {
        updateItemInDatabase(itemId, updatedItems.find(item => item.id === itemId)?.quantity);
      }
    return updatedItems;
  });
};

const removeFromDatabase = async (itemId: string) => {
  const user = getAuth().currentUser;
  if (user) {
    try {
      const itemRef = doc(firestoreDB, 'cart', user.uid, 'cartItems', itemId);
      await deleteDoc(itemRef);
      console.log(`Item ${itemId} removed from database`);
    } catch (err) {
      console.error('Unable to remove item ', err);
    }
  } else {
    console.log('User is not logged in');
  }
};

const updateItemInDatabase = async (itemId: string, quantity: number) => {
    const user = getAuth().currentUser;
    if (user) {
      try {
        const itemRef = doc(firestoreDB, 'cart', user.uid, 'cartItems', itemId);
        // const priceRef = doc(firestoreDB, 'cart', user.uid, 'cartItems');
        await setDoc(itemRef, { quantity }, { merge: true });
        console.log(`Item ${itemId} updated in database with new quantity: ${quantity}`);
      } catch (err) {
        console.error('Error updating item in database:', err);
      }
    } else {
      console.log('User is not logged in');
    }
  };

const updateTotalInDatabase = async (total: number) => {
  const user = getAuth().currentUser;
  if (user) {
    try {
      const totalRef = doc(firestoreDB, 'cart', user.uid);
      await setDoc(
        totalRef,
        { totalAmount: total },
        { merge: true } 
      );
      console.log('Total amount updated in database:', total);
    } catch (error) {
      console.error('Error updating total amount in database:', error);
    }
  } else {
    console.log('User is not logged in');
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar 
      placeholder="Search for your order" 
      profilePress={profileRedirect}/>

      <View style={styles.bottomBarPositioning}>
        <BottomBar 
        orderPress={() => {navigation.navigate('YourOrderPage')}}
        homePress={() => {navigation.navigate('HomePage')}}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerStyling}>Cart</Text>
      </View>

      <View style={styles.estimateProps}>
        <View style={styles.estimatePositioning}>
          <Text style={styles.estimationProps}>Estimated Delivery</Text>
          <Text style={styles.timeProps}>15:00 minutes</Text>
        </View>
      </View>

      {cartItems.length > 0 ? (
        <View style={[styles.componentPositioning, {gap: 25}]}>
          {cartItems.map((item) => (
            <CartComponents
              key={item.id}
              itemName={item.name}
              quantity={item.quantity}
              price={item.price}
              decreasePress={() => decrement(item.id)}
              increasePress={() => increment(item.id)}
            />
          ))}
        </View>
      ) : (
        <Text style={[styles.emptyCartMessage, {top: '15%'}]}>Your cart is empty.</Text>
      )}

      <View style={styles.amountContainer}>
        <Text style={styles.textAmount}>Total Amount:</Text>
        <Text style={styles.textTotalAmount}>{totalAmount.toFixed(2)}</Text>
      </View>

      <View style={styles.buttonPositioning}>
        <Buttons
          placeholder="Review payment and address"
          backgroundColor="black"
          size="xxl"
          text_color="white"
          text_style="bold"
          onPress={checkoutRedirect}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f7f4',
  },

 item: {
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
  },

  amountContainer: {
    position: 'absolute',
    top: '78%',
    right: '9%',
  },

  textAmount: {
    fontSize: 17,
    fontFamily: 'Lato-Black',
    textAlign: 'right',
  },

  textTotalAmount: {
    top: '10%',
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    textAlign: 'right',
  },

  buttonPositioning: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    bottom: '10%',
  },

  emptyCartMessage: {
    textAlign: 'center',
    fontSize: 25,
    color: '#888',
  },

  estimationProps: {
    color: '#A18C8C',
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    top: '10%',
  },

  timeProps: {
    fontFamily: 'Lato-Black',
    fontSize: 25,
    top: '35%',
  },

  estimatePositioning: {
    left: '4%',
    top: '8%',
  },

  headerContainer: {
    left: '4.3%',
    top: '2.5%',
  },

  headerStyling: {
    fontFamily: 'Lato-Black',
    fontSize: 25,
    zIndex: 1,
  },

  estimateProps: {
    backgroundColor: '#fff',
    height: (270 / 2400) * height,
    width: (990 / 1080) * width,
    elevation: 2,
    borderRadius: 10,
    alignSelf: 'center',
    top: '5%',
  },

  bottomBarPositioning: {
    bottom: '-83%',
  },

  componentPositioning: {
    top: '7%',
  },
});

export default CartPage;
