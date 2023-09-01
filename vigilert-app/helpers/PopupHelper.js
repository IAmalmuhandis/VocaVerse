import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import stylesClass, { classes } from '../assets/css/styles';

const PopupHelper = ({ isVisible, message, type, onClose }) => {
  const [popupVisible, setPopupVisible] = useState(isVisible);

  useEffect(() => {
    setPopupVisible(isVisible);
  }, [isVisible]);

  const getPopupBackgroundColor = () => {
    return type === 'success' ? classes.successColor : classes.errorColor;
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={popupVisible}
      onRequestClose={() => {
        setPopupVisible(false);
        if (onClose) {
          onClose();
        }
      }}
    >
      <View style={styles.popupContainer}>
        <View style={[styles.popupContent, { backgroundColor: getPopupBackgroundColor() }]}>
          <Text style={styles.popupMessage}>{message}</Text>
          <TouchableOpacity
            style={styles.popupButton}
            onPress={() => {
              setPopupVisible(false);
              if (onClose) {
                onClose();
              }
            }}
          >
            <Text style={styles.popupButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContent: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  popupMessage: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
  },
  popupButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  popupButtonText: {
    color: classes.primaryColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PopupHelper;
