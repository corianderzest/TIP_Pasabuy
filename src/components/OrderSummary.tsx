import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { RootStackParamList } from "../navigation/NavigationTypes";
import { StackNavigationProp } from "@react-navigation/stack";
import {collection, getDocs, doc, getDoc,} from "firebase/firestore"
import { firestoreDB } from "../backend/firebaseInitialization";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";




const { width } = Dimensions.get("window");

const OrderSummary: React.FC = () => {

//   const [orderData, setOrderData] = useState<any[]>([])
//   const [priceTotalAmount, setPriceTotalAmount] = useState<number>(0)

//   useEffect(() => {
//   const fetchOrder = async () => {
//     const user = getAuth().currentUser;
//     if(user){
//     try{
//     const summaryRef = collection(firestoreDB, 'cart', user.uid, 'cartItems');
//     const querySnapshot = await getDocs(summaryRef);

//     const order = querySnapshot.docs.map((doc) => {
//       const data = doc.data();
//         return{
//           id: doc.id,
//           name: data.name,
//           description: data.description,
//           price: data.price,
//           quantity: data.quantity || 1
//         }}) 
//         setOrderData(order)
//         console.log(order)
//   } catch (error) {
//     console.error('Data failed to retrieve', error)
//   }} else {
//     console.log('User invalid...')
//   }}
//    fetchOrder();
// }, [])

// useEffect(() => {
//   const fetchTotal = async () => {
//   const user = getAuth().currentUser;
//   if(user){
//     try{
//     const amountPrice = doc(firestoreDB, 'cart', user.uid)
//     const docSnapshot = await getDoc(amountPrice)

//     if (docSnapshot.exists()){
//       const data = docSnapshot.data()
//       const totalAmount = data.totalAmount || 0
//       setPriceTotalAmount(totalAmount)
//       console.log('total amount: ', totalAmount)  
//     }
//   } catch(err) {
//     console.error(err)
//   }} else {
//     console.log('invalid user..!..')
//   }
//   }
//   fetchTotal();
// }, [])


  return (
    <View></View>
  //   <View style={styles.summaryContainer}>
  //         <Text style={styles.title}>Order Summary</Text>
          
  //         {orderData.length > 0 ? (
  //           orderData.map((order) => {
  //               const priceUpdate = priceCalculator(order.price, order.quantity) 
  //             return(             
  //         <View style={styles.itemContainer} key={order.id}>
  //           <Text style={styles.itemName}>{order.name} x{order.quantity}</Text>
  //           <Text style={styles.price}>₱{priceUpdate}</Text>
  //         </View>
  //     )})) : (<Text style={styles.itemName}>No items in cart</Text>)}
  //       </View> 
  );
};

const styles = StyleSheet.create({
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
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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

export default OrderSummary;
