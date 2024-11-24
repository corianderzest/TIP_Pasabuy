import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import UpperNavbar from "../components/UpperNavbar";
import BottomNavbar from "../components/BottomBarSeller";
import orders from "../icons/order.png";
import logo from "../icons/Logo.png";
import OrderSummary from "../components/OrderSummary";
import BuyBuddyName from "../components/BuyBuddyName";
import {collection, getDocs, doc, getDoc,} from "firebase/firestore"
import { firestoreDB } from "../backend/firebaseInitialization";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import order from "../icons/order.png"
import { RootStackParamList } from "../navigation/NavigationTypes";
import { StackNavigationProp } from "@react-navigation/stack";

const { width, height } = Dimensions.get("window");
const bottomNavbarHeight = 60;

type OrderProps = {
  navigation: StackNavigationProp<RootStackParamList, 'YourOrderPage'>
}

const YourOrderPage: React.FC<OrderProps> = ({navigation}) => {

    const [priceTotalAmount, setPriceTotalAmount] = useState<number>(0)
    const [orderData, setOrderData] = useState<any[]>([])
    const [isAccepted, setIsAccepted] = useState<boolean>(false)


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
          quantity: data.quantity || 1,
          orderStatus: data.orderAccepted 
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
    const fetchStatus = async() => {
    const user = getAuth().currentUser
    if(user){
      try{
        const statusRef = collection(firestoreDB, 'order')
        const statusSnap = await getDocs(statusRef)

       statusSnap.docs.forEach((doc) => {
        const data = doc.data()
        const currentStatus = data.orderAccepted
        console.log(currentStatus)
        setIsAccepted(currentStatus)
       })
      } catch(err) {
        console.log('fetch status error: ', err)
      }
    } else {
      console.error('invalid user...')
    }}
    fetchStatus()
  }, [])

  useEffect(() => {
  const fetchTotal = async () => {
  const user = getAuth().currentUser;
  if(user){
    try{
    const amountPrice = doc(firestoreDB, 'cart', user.uid)
    const docSnap = await getDoc(amountPrice)

    if (docSnap.exists()){
      const data = docSnap.data()
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

const priceCalculator = (price: number, quantity: number) => {
  return price * quantity
}

  const getOrderStatusMessage = () => {
  if (isAccepted === null) {
    return "Loading...";
  } else if (isAccepted) {
    return "Delivery is on the way";
  } else if (orderData.length > 0) {
    return `You have ${orderData.length} items waiting to be accepted`;
  } else {
    return "No active orders";
  }
};

<Text style={styles.timeMinsText}>{getOrderStatusMessage()}</Text>;


  return (
    <View style={styles.container}>

      <UpperNavbar 
      title="Your Order" 
      backPress={() => {navigation.goBack()}}/>

      <ScrollView contentContainerStyle={styles.contentContainer}>

        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>

        <View style={styles.estimatedDeliveryContainer}>
          <Text style={styles.estimatedDeliveryText}>
            Order Status
          </Text>
          <Text style={styles.timeMinsText}>
            {getOrderStatusMessage()}
            </Text>
        </View>

        <View style={styles.boldDivider} />

        <Text style={styles.statusMessage}>
          Preparing your food. Your BuyBuddy will pick it up when it’s ready.
        </Text>

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

        {/* <BuyBuddyName name={"BuyBuddy"} /> */}
      </ScrollView>

      {priceTotalAmount > 0 ? (
      <View style={styles.totalAmountContainer}>
        <Text style={styles.totalAmountText}>Total Amount</Text>
        <Text style={styles.totalAmountValue}>₱{priceTotalAmount}</Text>
      </View>) : (
        <Text style={styles.totalAmountValue}>No price available...</Text>
      )}

      <View style={styles.bottomNavbarContainer}>
        <BottomNavbar 
        onPressDeliveries={() => {navigation.navigate('YourOrderPage')}}
        onPressHome={() => {navigation.navigate('HomePage')}} 
        deliveriesIcon={order}
        deliveriesText="Orders" 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F4",
    justifyContent: "space-between",
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
  contentContainer: {
    paddingHorizontal: 16,
    marginTop: 60, 
    paddingBottom: 120, 
    alignItems: "center",
  },
  logoContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  estimatedDeliveryContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  estimatedDeliveryText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333",
  },
  timeMinsText: {
    fontSize: 18,
    top: '12%',
    fontWeight: "600",
    color: "black",
  },
  boldDivider: {
    width: "100%",
    height: 2,
    backgroundColor: "#000",
    marginVertical: -30,
    marginBottom: 9,
  },
  statusMessage: {
    textAlign: "center",
    fontSize: 16,
    color: "#6E6E6E",
    marginBottom: 10,
  },
  totalAmountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 10,
    position: "absolute",
    bottom: bottomNavbarHeight,
    left: 0,
    right: 0,
    marginBottom: 30,
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
  bottomNavbarContainer: {
    height: bottomNavbarHeight,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default YourOrderPage;
