import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import BottomNavbar from "../components/BottomBarSeller";
import Buttons from "../components/Buttons";
import PaymentMethod from "../components/PaymentMethod";
import leftArrowIcon from "../icons/arrow.png";
import { firestoreDB } from "../backend/firebaseInitialization";
import { getDoc, doc, collection, getDocs, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/NavigationTypes";
import UpperNavbar from "../components/UpperNavbar";

const { width, height } = Dimensions.get("window");

const navbarHeight = 60;
const bottomNavbarHeight = 60;

interface NavigationProp {
  navigation: StackNavigationProp<RootStackParamList, 'DeliveryRequest'>
}

const DeliveryRequest: React.FC<NavigationProp> = ({ navigation }) => {
  const [orderData, setOrderData] = useState<any[]>([]);
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [orderID, setOrderID] = useState<string>(''); 

  useEffect(() => {
    const user = getAuth().currentUser;
    const fetchOrder = async () => {
      if (user) {
        try {
          const docRef = collection(firestoreDB, 'order');
          const docSnap = await getDocs(docRef);

          docSnap.docs.forEach((doc) => {
            const data = doc.data();
            const recipientName = data.recipient;
            const recipientAddress = data.address;
            const totalAmount = data.totalAmount;
            const orderItems = data.orderItems;
            const orderID = doc.id; 

            setAddress(recipientAddress);
            setName(recipientName);
            setTotalAmount(totalAmount);
            setOrderData(orderItems);
            setOrderID(orderID); 
          });

        } catch (err) {
          console.error('fetch error... ', err);
        }
      } else {
        console.error('user not found...');
      }
    };
    fetchOrder();
  }, []);

  const priceCalculator = (price: number, quantity: number) => {
    return price * quantity;
  };

  const handleAcceptOrder = async () => {
    try {
      if (orderID) {
        const orderRef = doc(firestoreDB, 'order', orderID); 
        await updateDoc(orderRef, {
          orderAccepted: true, 
        });
        navigation.navigate('ForDelivery');
      }
    } catch (error) {
      console.error('Error updating order status: ', error);
    }
  };

  return (
    <View style={styles.container}>

          <UpperNavbar title="Delivery Request" 
      backPress={() => {navigation.goBack()}}/>


      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.customerInfoContainer}>
          <Text style={styles.customerName}>{name}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>

        <View style={styles.summaryContainer}>
          <Text style={styles.title}>Order Summary</Text>
          {orderData.length > 0 ? (
            orderData.map((order) => (
              <View style={styles.itemContainer} key={order.id}>
                <Text style={styles.itemName}>
                  {order.name} x{order.quantity}
                </Text>
                <Text style={styles.price}>₱{order.total}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.itemName}>No items in cart</Text>
          )}
        </View>

        <PaymentMethod />
      </ScrollView>

      <View style={styles.totalAmountContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.amountText}>₱{totalAmount}</Text>
      </View>

      <View style={styles.acceptButtonContainer}>
        <Buttons
          placeholder="Accept"
          backgroundColor="black"
          text_style="normal"
          text_color="white"
          size="xxl"
          width={width * 0.8}
          height={40}
          onPress={handleAcceptOrder} 
        />
      </View>

      <View style={{ height: bottomNavbarHeight }}>
        <BottomNavbar 
        onPressDeliveries={() => {navigation.navigate('ForDelivery')}}
        onPressHome={() => {navigation.navigate('HomeSeller')}}/>
      </View>
    </View>
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

  container: {
    flex: 1,
    backgroundColor: "#F8F7F4",
  },
  navbarContainer: {
    backgroundColor: "#F3C623",
    width: "100%",
    height: navbarHeight,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    zIndex: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  leftArrowContainer: {
    position: "absolute",
    left: 15,
    top: 17,
  },
  leftArrowIcon: {
    width: 25,
    height: 25,
  },
  navbarTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    flex: 1,
    marginLeft: -120,
  },
  buttonContainer: {
    position: "absolute",
    right: 14,
    top: "50%",
    transform: [{ translateY: -13 }],
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    marginTop: navbarHeight,
    paddingBottom: bottomNavbarHeight + 16,
    alignItems: "center",
  },
  customerInfoContainer: {
    alignItems: "flex-start",
    width: (900 / 1080) * width,
    marginVertical: 8,
  },
  customerName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 2,
    top: '21%',
    right: '4%',
  },
  address: {
    fontSize: 16,
    fontWeight: "400",
    color: "#6E6E6E",
    top: '20%',
    right: '4%',
  },
  whiteContainer: {
    width: (900 / 1080) * width,
    height: (100 / 1080) * height,
    backgroundColor: "#FFFFFF",
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  totalAmountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginLeft: 20,
  },
  amountText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginRight: 20,
  },

  acceptButtonContainer: {
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 25,
    alignItems: "center",
  },
});

export default DeliveryRequest;
