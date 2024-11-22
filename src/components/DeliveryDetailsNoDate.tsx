import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import locationImage from "../icons/location.png";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/NavigationTypes";

type DeliveryProps = {
  containerPress?: () => void,
  address?: string,
  amount?: number,
  recipient?: string,
}

const { width, height } = Dimensions.get("window");

const DeliveryDetailsNoDate: React.FC<DeliveryProps> = ({
  containerPress,
  address,
  amount,
  recipient

}) => {
  return (
    <TouchableOpacity onPress={containerPress}>
    <View style={styles.container}>
      
      {/* Location Image */}
      <Image source={locationImage} style={styles.locationImage} />

      {/* Customer Name, Address, and Amount */}
      <View style={styles.textContainer}>
        <View style={styles.nameAmountContainer}>
          {/* Customer Name */}
          <Text style={styles.customerName}>{recipient}</Text>

          {/* Amount */}
          <Text style={styles.amount}>₱{amount}</Text>
        </View>

        {/* Address */}
        <Text style={styles.address}>{address}</Text>
      </View>
    </View> 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 0.5,
  },
  locationImage: {
    width: 40,
    height: 42,
    marginRight: 13,
    marginTop: 5,
  },
  textContainer: {
    flexDirection: "column",
    flex: 1,
  },
  nameAmountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 8,
  },
  customerName: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },
  address: {
    fontSize: 14,
    fontWeight: "400",
    top: '2%',
    color: "#6E6E6E",
  },
  amount: {
    fontSize: 16,
    top: '2%',
    right: '22%',
    fontWeight: "700",
    color: "black",
  },
});

export default DeliveryDetailsNoDate;
