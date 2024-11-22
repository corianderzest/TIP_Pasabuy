import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import UpperNavbar from "../components/UpperNavbar";
import BottomNavbar from "../components/BottomNavbar";
import DeliveryDetailsNoDate from "../components/DeliveryDetailsNoDate";
import { firestoreDB } from "../backend/firebaseInitialization";
import { collection, onSnapshot } from "firebase/firestore"; // Changed to onSnapshot for real-time listener
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

const { width, height } = Dimensions.get("window");

const navbarHeight = 60;
const bottomNavbarHeight = 60;

const OrderRequest: React.FC = () => {
  const [orderItems, setOrderItems] = useState<any[]>([]);

  useEffect(() => {
    const user = getAuth().currentUser;
    if (!user) {
      console.log("User not found.");
      return;
    }

    const orderRef = collection(firestoreDB, "order");

    const unsubscribe = onSnapshot(
      orderRef,
      (snapshot) => {

        const orderList = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            address: data.address || "",
            name: data.recipient || "",
            amount: data.totalAmount || 0,
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
    <View style={styles.container}>

      <UpperNavbar title="Order Request" />


      <ScrollView contentContainerStyle={styles.contentContainer}>

        <Text style={styles.description}>See available Order Request.</Text>

        {orderItems.length > 0 ? (
          orderItems.map((order, index) => (
            <DeliveryDetailsNoDate
              key={index}
              recipient={order.name}
              amount={order.amount}
              address={order.address}
            />
          ))
        ) : (
          <Text>Error fetching data... please wait....</Text>
        )}
      </ScrollView>

      <View style={{ height: bottomNavbarHeight }}>
        <BottomNavbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F4",
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    color: "#6E6E6E",
    marginVertical: 16,
    top: "1%",
    textAlign: "center",
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    marginTop: navbarHeight,
    paddingBottom: bottomNavbarHeight + 16,
    alignItems: "center",
  },
});

export default OrderRequest;
