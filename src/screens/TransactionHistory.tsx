import React from "react";
import { View, StyleSheet, Text, Dimensions, ScrollView } from "react-native";
import UpperNavbar from "../components/UpperNavbar";
import BottomNavbarSeller from "../components/BottomBarSeller";
import { SafeAreaView } from "react-native-safe-area-context";
import TransactionComponent from "../components/TransactionComponent";
import { firestoreDB } from "../backend/firebaseInitialization";
import { collection, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";  
import order from "../icons/order.png"

const { width, height } = Dimensions.get("window");

const navbarHeight = 60;
const bottomNavbarHeight = 60;

const TransactionHistory: React.FC = () => {

  const [orderItems, setOrderItems] = useState<any[]>([]);

  useEffect(() => {
    const user = getAuth().currentUser;
    if (!user) {
      console.log("User not found.");
      return;
    }

    const orderRef = collection(firestoreDB, "transactionHistory");

    const unsubscribe = onSnapshot(
      orderRef,
      (snapshot) => {

        const orderList = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            address: data.address || "",
            name: data.name || "",
            amount: data.amount || 0,
            deliveryDate: data.date,  
            uniqueID: data.uniqueID || "",
          };
        });
        setOrderItems(orderList); 
      },
      (error) => {
        console.error("Failed to fetch real-time data: ", error);
      }
    );

    return () => unsubscribe(); 
  }, []); 

  return (
    <SafeAreaView style={styles.container}>
      <UpperNavbar title="Transaction History" />

      <ScrollView contentContainerStyle={styles.contentContainer}>

        <Text style={styles.description}> 
          See past transactions.
        </Text>

        {orderItems.length > 0 ? (
          orderItems.map((order, index) => (
            <TransactionComponent
              key={index}
              transactionID={order.uniqueID}
              amount={order.amount}
              address={order.address}
              date={order.deliveryDate}
              // containerPress={() => {navigation.navigate('DeliveryRequest')}}
            />
          ))
        ) : (
          <Text>Error fetching data... please wait....</Text>
        )}
        
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomNavbarContainer}>
        <BottomNavbarSeller 
          deliveriesIcon={order}
          deliveriesText="Orders"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F4",
  },

  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333",
    marginVertical: 16,
    textAlign: "center",
  },
  contentContainer: {
    flexGrow: 1,
    marginBottom: 80,
    paddingHorizontal: 16,
    paddingTop: 35,
  },
  bottomNavbarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: (205 / 2400) * height,
  },
});

export default TransactionHistory;
	