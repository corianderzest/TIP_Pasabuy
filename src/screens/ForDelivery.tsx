import React from "react";
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
import leftArrowIcon from "../icons/arrow.png";
import helpIcon from "../icons/help.png";
import logo from "../icons/Logo.png";
import StoreCustomerInfo from "../components/StoreCustomerInfo";
import CustomerInfoWithMail from "../components/CustomerInfoWithMail";
import Buttons from "../components/Buttons";
import { firestoreDB } from "../backend/firebaseInitialization";
import {addDoc, deleteDoc, collection, doc, getDoc, getDocs, } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/NavigationTypes";
import UpperNavbar from "../components/UpperNavbar";

const { width, height } = Dimensions.get("window");

const navbarHeight = 60;
const bottomNavbarHeight = 60;

type DeliveryProps = {
  navigation: StackNavigationProp<RootStackParamList, 'ForDelivery'>
}

const ForDelivery: React.FC<DeliveryProps> = ({
  navigation
}) => {

  const [recipientName, setRecipientName] = useState<string>('')
  const [recipientAddress, setRecipientAddress] = useState<string>('')
  const [orderDate, setOrderDate] = useState<string>('')
  const [amount, setAmount] = useState<number>(0)
  const [uniqueID, setUniqueID] = useState<string>('')
  const [documentId, setDocumentId] = useState<string | null>(null);
  const [contact, setContact] = useState<any>('')
  const user = getAuth().currentUser

useEffect(() => {
  const fetchData = async() => {
    if(user){
      try{
        const dataRef = collection(firestoreDB, 'order')
        const dataSnap = await getDocs(dataRef)
        console.log(dataSnap.docs.map(doc => doc.data()));

        dataSnap.docs.forEach((doc)=> {
          const data = doc.data()
          const name = data.recipient
          const address = data.address
          const date = data.orderDate
          const amount = data.totalAmount
          const uniqueID = data.uniqueID
          const contact = data.contact

          setRecipientName(name)
          setRecipientAddress(address)
          setContact(contact)
          setOrderDate(date)
          setAmount(amount)
          setUniqueID(uniqueID)
          setDocumentId(doc.id);
        })
      }catch(err){
        console.error('fetching failed... ', err)
      }
    } else {
      console.error('user not found....')
    }
  }
  fetchData()
}, [])

// useEffect(() => {
//   const user = getAuth().currentUser
//   const fetchUserCredential = async() => {
//     if(user){

//     } else {
//       console.error('error invalid.... ')
//     }
//   }



// }, [])

const orderDocument = {
  name: recipientName,
  address: recipientAddress,
  date: orderDate,
  amount: amount,
  uniqueID: uniqueID,
}

const addData = async () => {
  if(user){
    try{
      const historyRef = collection(firestoreDB, 'transactionHistory')
      await addDoc(historyRef, orderDocument)
      console.log('sucessfully added history....')
    } catch(err){
      console.error('failed adding data', err)
    }
  }else{
    console.log('user not found...')
  }
}

const deleteData = async() => {
  if(user && documentId){
    try{
      const orderRef = doc(firestoreDB, 'order', documentId)
      await deleteDoc(orderRef)
      console.log('successfully removed the item... ')
    } catch(err){
      console.error('error deleting data...', err)
    }
  } else {
    console.error('user invalid...')
  }
}

  const arrivalButton = () => {
    addData();
    deleteData();
    navigation.navigate('OrderRequest')
  }

  return (
    <View style={styles.container}>

      <UpperNavbar title="For Delivery" 
      backPress={() => {navigation.goBack()}}/>

      <ScrollView contentContainerStyle={styles.contentContainer}>

        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>

        <View style={styles.estimatedDeliveryContainer}>
          <Text style={styles.estimatedDeliveryText}>
            A customer is waiting for you
          </Text>
          <Text style={styles.timeMinsText}>Hurry Up</Text>

          <View style = {styles.customerNo}>
            <Text style = {styles.textSizing1}>Customer Credentials</Text>
          <Text style = {styles.textSizing2}>{recipientName}</Text>
          <Text style = {styles.textSizing2}>{contact}</Text>
          </View>
        </View>

        <View style = {styles.messaging}>
        </View>
      </ScrollView>

      <View style={styles.acceptButtonContainer}>
        <TouchableOpacity>
        <Buttons
          placeholder="Order Arrived"
          backgroundColor="black"
          text_style="normal"
          text_color="white"
          size="xxl"
          width={width * 0.8}
          height={50}
          onPress={arrivalButton}
        />
        </TouchableOpacity>
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
  container: {
    flex: 1,
    backgroundColor: "#F8F7F4",
  },
  
  customerNo: {
    // position: 'absolute',
    alignContent: 'center',
    alignItems: 'center',
    top: '35%',
  },

  textSizing1: {
    fontWeight: 'bold',
    fontSize: 18
  },

  textSizing2: {
    fontSize: 16
  },

  messaging: {
    top: '-8%'
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
    marginLeft: -150,
  },
  helpContainer: {
    position: "absolute",
    right: 15,
  },
  helpIcon: {
    width: 40,
    height: 40,
  },
  contentContainer: {
    paddingHorizontal: 16,
    marginTop: navbarHeight,
    alignItems: "center",
    top: '8%'
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
    fontSize: 20,
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

export default ForDelivery;
