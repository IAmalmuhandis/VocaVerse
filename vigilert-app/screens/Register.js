import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import PopupHelper from '../helpers/PopupHelper';
import stylesClass, {classes} from '../assets/css/styles';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('');
   // Get the navigation object
   const navigation = useNavigation();
  
  const handleRegister = () => {
    setIsLoading(true);
    // Simulate registration success
    setTimeout(() => {
      setIsLoading(false);
      setPopupMessage('Registration successful!');
      setPopupType('success');
      setPopupVisible(true);

      // Navigate to the next screen upon successful registration
      // You can use navigation library like React Navigation
    }, 2000);
  };
  const handleAlreadyHaveAnAccount = () => {
    navigation.navigate('Login');
  
  };
  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <View style={styles.container}>
     <View style={stylesClass.header}>
        <Text style={stylesClass.heading}>Create Account</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.registerButton}
        onPress={handleRegister}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.buttonText}>Create</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAlreadyHaveAnAccount} style={styles.alreadyHaveAccount}>
        <Text style={styles.alreadyHaveAccountText}>Already have an account? Sign in</Text>
      </TouchableOpacity>
      <PopupHelper
        isVisible={popupVisible}
        message={popupMessage}
        type={popupType}
        onClose={closePopup}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor : classes.tertiaryColor
  },
 
   input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  registerButton: {
    backgroundColor: classes.primaryColor,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: classes.tertiaryColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  alreadyHaveAccount: {
    marginTop: 20,
  },
  alreadyHaveAccountText: {
    color: classes.secondaryColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Register;
