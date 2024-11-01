import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

type NotificationProps = {
  message?: string;
  isVisible?: boolean;
};

const Notification: React.FC<NotificationProps> = ({
  message,
  isVisible
}) => {
  return (
    <Animated.View style={[styles.notificationBar, { opacity: isVisible ? 1 : 0 }]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  notificationBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'yellow',
    padding: 10,
    alignItems: 'center',
    zIndex: 1000,
  },
  message: {
    fontWeight: 'bold',
  },
});

export default Notification;
