import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import React from "react";
import deliveries from "../icons/deliveries.png";
import home from "../icons/home.png";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

interface BottomNavbarProps {
  onPress?: () => void;
  placeholder?: string,
}

const BottomNavbar: React.FC<BottomNavbarProps> = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <View style={styles.positioning}>
        <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image style={styles.deliveriesIcon} source={deliveries} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.imageProps} source={home}/>
        </TouchableOpacity>
        </View>
        <View style = {styles.subheaderContainer}>
          <Text style = {[styles.subheaderText, {marginRight: '37%'}]}>Deliveries</Text>
          <Text style = {[styles.subheaderText, {marginLeft: '50%'}]}>Home</Text> 
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3C623",
    width: "100%",
    height: (205 / 2400) * height,
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },

  positioning: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "93%",
    paddingHorizontal: "5%",
  },

  iconContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection: 'row', 
    marginHorizontal: '24%',
    bottom: '15%',
    left: '3%'
  },

  deliveriesIcon: {
    width: 40,
    height: 40,
  },

  imageProps: {
    width: 38,
    height: 32,
  },

  subheaderContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: '30.8%',
    bottom: '-30%',
    
    
  },

  subheaderText: {
      alignSelf: 'center',
  },

});

export default BottomNavbar;
