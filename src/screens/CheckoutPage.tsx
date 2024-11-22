import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import UpperNavbar from "../components/UpperNavbar";
import BottomNavbar from "../components/BottomNavbar";
import orders from "../icons/order.png";
import DeliveryAddress from "../components/DeliveryAddress";
import PaymentMethod from "../components/PaymentMethod";
import OrderSummary from "../components/OrderSummary";
import Buttons from "../components/Buttons";
import { RootStackParamList } from "../navigation/NavigationTypes";
import { StackNavigationProp } from "@react-navigation/stack";
import {collection, getDocs, doc, getDoc, addDoc} from "firebase/firestore"
import { firestoreDB } from "../backend/firebaseInitialization";
import { getAuth } from "firebase/auth";

type CheckoutProps = {
  navigation: StackNavigationProp<RootStackParamList, 'CheckoutPage'>
}

const { width, height } = Dimensions.get("window");

const navbarHeight = 60;
const bottomNavbarHeight = 60;

const CheckoutPage: React.FC <CheckoutProps> = ({navigation}) => {
  
  const [isChecked, setIsChecked] = useState(false);
  const [orderData, setOrderData] = useState<any[]>([]);
  const [priceTotalAmount, setPriceTotalAmount] = useState<number>(0)
  const [address, setAddress] = useState<any[]>([]);
   
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleString();
  const randomID = generateRandomId();

  function generateRandomId(length: number = 8): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

useEffect(() => {
  const fetchOrder = async () => {
    const user = getAuth().currentUser;
    if(user){
    try{
    const summaryRef = collection(firestoreDB, 'cart', user.uid, 'cartItems');
    const querySnapshot = await getDocs(summaryRef);

    const order = querySnapshot.docs.map((doc) => {
      const data = doc.data();
        return{
          id: doc.id,
          name: data.name,
          description: data.description,
          price: data.price,
          quantity: data.quantity || 1
        }}) 
        setOrderData(order)
        console.log(order)
  } catch (error) {
    console.error('Data failed to retrieve', error)
  }} else {
    console.log('User invalid...')
  }}
   fetchOrder();
}, [])

useEffect(() => {
  const fetchTotal = async () => {
  const user = getAuth().currentUser;
  if(user){
    try{
    const amountPrice = doc(firestoreDB, 'cart', user.uid)
    const docSnapshot = await getDoc(amountPrice)

    if (docSnapshot.exists()){
      const data = docSnapshot.data()
      const totalAmount = data.totalAmount || 0
      setPriceTotalAmount(totalAmount)
      console.log('total amount: ', totalAmount)  
    }
  } catch(err) {
    console.error(err)
  }} else {
    console.log('invalid user..!..')
  }
  }
  fetchTotal();
}, [])

useEffect (() => {
  const fetchAddress = async () => {
    const user = getAuth().currentUser
    if(user){
      try{
        const userRef = doc(firestoreDB, 'users', user.uid)
        const snapshot = await getDoc(userRef)
        
        if(snapshot.exists()){
          const data = snapshot.data();
          const userAddress = data.address || ''
          setAddress(userAddress);
          console.log('User address: ', address)
        }
      } catch(err) { 
        console.error(err)
      }
    } else {
      console.log('user not found...')
    }
  } 
  fetchAddress();
}, [])

  const priceCalculator = (price: number, quantity: number) => {
    return price * quantity
  }

 const receiptRedirect = async () => {
  if (!isChecked) {
    console.log('Checkbox must be filled!');  
    return; 
  }

  const user = getAuth().currentUser;
  if (!user) {
    console.log('No user logged in.');
    return;
  }

  // retrieve data
  const orderDocument = {
    orderItems: orderData.map(order => ({
      id: order.id,
      name: order.name,
      description: order.description,
      price: order.price,
      quantity: order.quantity,
      total: priceCalculator(order.price, order.quantity),
    })),
    totalAmount: priceTotalAmount,
    address: address,
    date: formattedTime, 
    uniqueID: randomID,
    isAccepted: false, 
  };

  // save data
  try {
    const orderRef = collection(firestoreDB, 'order');
    await addDoc(orderRef, orderDocument);
    console.log('Order placed successfully!');
    navigation.navigate('YourOrderPage'); 
  } catch (err) {
    console.error('Error placing order:', err);
  }
};


  return (
    <View style={styles.container}>
      <UpperNavbar title="Checkout" />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.checkoutText}>Checkout</Text>
        <Text style={styles.stallName}>Stall Name</Text>
        
        {address.length > 0 ? (
        <DeliveryAddress 
          address={address}
        />) : (
          <Text>No address found</Text>
        )}


        <PaymentMethod/>

        <View style={styles.summaryContainer}>
          <Text style={styles.title}>Order Summary</Text>
          
          {orderData.length > 0 ? (
            orderData.map((order) => {
                const priceUpdate = priceCalculator(order.price, order.quantity) 
              return(             
          <View style={styles.itemContainer} key={order.id}>
            <Text style={styles.itemName}>{order.name} x{order.quantity}</Text>
            <Text style={styles.price}>₱{priceUpdate}</Text>
          </View>
      )})) : (<Text style={styles.itemName}>No items in cart</Text>)}
        </View>


        {priceTotalAmount > 0 && (
        <View style={styles.totalAmountContainer}>
          <Text style={styles.totalAmountText}>Total Amount</Text>
          <Text style={styles.totalAmountValue}>₱{priceTotalAmount}</Text>
        </View>
        )}

         <View style={styles.checkboxContainer}>

            <TouchableOpacity
              style={[styles.checkbox, isChecked && styles.checkedBox]}
              onPress={() => setIsChecked(!isChecked)}>
              {isChecked && <Text style={styles.checkmark}>✔</Text>} 
            </TouchableOpacity>

            <Text style={styles.checkboxLabel}>
              I hereby give TIP-Pasabuy the permission to share my customer data with
              Restaurants, and as applicable, their respective affiliates and
              subsidiaries, for service improvement and/or other related marketing
              purposes. I can find detailed information about the customer data
              sharing here.
            </Text>
         </View>

        {/* Place Order Button */}
        <View style={styles.buttonContainer}>
          <Buttons
            placeholder="Place Order"
            backgroundColor="black"
            text_style="normal"
            text_color="white"
            size="xxl"
            height={40}
            width={width * 0.8}
            onPress={() => {
              receiptRedirect()
            }}
          />
        </View>
      </ScrollView>

      <View style={{ height: bottomNavbarHeight }}>
        <BottomNavbar icon={orders} iconText="Orders" />
      </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F4",
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
  },
  stallName: {
    fontSize: 14,
    fontWeight: "400",
    color: "#333",
    marginTop: 1,
    marginBottom: 5,
  },
  contentContainer: {
    paddingHorizontal: 16,
    marginTop: navbarHeight,
    paddingBottom: bottomNavbarHeight + 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "flex-start", 
    marginTop: 15,
    marginBottom: 15,
    flexWrap: "wrap", 
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#6E6E6E",
    borderRadius: 4,
    marginRight: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  checkedBox: {
    backgroundColor: "#007BFF", 
    borderColor: "#007BFF", 
  },
  checkmark: {
    fontSize: 12,
    color: "#FFFFFF", 
  },
  checkboxLabel: {
    fontSize: 12,
    color: "#6E6E6E",
    flex: 1,
    flexWrap: "wrap", 
  },
  totalAmountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 10,
  },
  totalAmountText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  totalAmountValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  buttonContainer: {
    alignItems: "center",
  },

  summaryContainer: {
    width: '100%',
    padding: 14,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    alignItems: "flex-start",
    marginVertical: 16,
    alignSelf: "center",
    elevation: 0.5, 
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 12,
    alignSelf: "flex-start",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 4,
  },
  itemName: {
    fontSize: 13,
    fontWeight: "400",
    flex: 1,
  },
  price: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "right",
  },

});

export default CheckoutPage;
