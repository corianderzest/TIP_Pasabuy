import React from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

const { width,height } = Dimensions.get("window");

type ValidationModalProps = {
  visible: boolean;
  message: string;
  onClose: () => void;
};

const ValidationModal: React.FC<ValidationModalProps> = ({
  visible,
  message,
  onClose,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Image
            source={require("../assets/images/error-icon.png")}
            style={styles.icon}
          />

          <Text style={styles.message}>{message}</Text>

          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "85%",
    height: "22.6%",
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: "center",
  },
  icon: {
    width: 40, 
    height: 40, 
    marginBottom: 15, 
  },
  message: {
    fontSize: 15, 
    textAlign: "center",
    color: "#333",
    fontWeight: "400",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#D32F2F",
    borderRadius: 10,
    paddingVertical: 8, 
    paddingHorizontal: 24, 
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default ValidationModal;
