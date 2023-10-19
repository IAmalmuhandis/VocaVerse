import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Animated } from 'react-native';
import Swiper from 'react-native-swiper';
import getImageSource from '../helpers/ImageHelper';
import stylesClass, {classes} from '../assets/css/styles';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

const { width, height } = Dimensions.get('window');

const Welcome = () => {
  const [showButton, setShowButton] = useState(false);
  const fadeAnim = new Animated.Value(0);

  // Get the navigation object
  const navigation = useNavigation();
  const onboardingScreens = [
    { title: 'Welcome to VocaVerse', image: 'anime1' },
    { title: 'Diverse Language Learning', image:'anime2' },
    { title: 'Explore Global Cultures', image: 'anime3' },
  ];
  const handleSlideChange = (index) => {
    setShowButton(index === onboardingScreens.length - 1);
  };
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: showButton ? 1 : 0,
      duration: showButton ? 50 : 300,
      useNativeDriver: true,
    }).start();
  }, [showButton]);
  const handleGetStarted = () => {
    // Navigate to the Registration screen
    navigation.navigate('Register');
  };
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        loop={false}
        onIndexChanged={handleSlideChange}
      >
        {onboardingScreens.map((screen, index) => (
          <View key={index} style={styles.slide}>
            <Image source={getImageSource(screen.image)} style={styles.image} />
            <Text style={styles.text}>{screen.title}</Text>
          </View>
        ))}
      </Swiper>
      <Animated.View style={[styles.buttonContainer, { opacity: fadeAnim }]}>
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: classes.tertiaryColor,
  },
  
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: height * 0.4,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: classes.secondaryColor,
  },
  buttonContainer: {
    position: 'absolute',
    top: 750, // Adjust the distance from the top as needed
    right: 100, // Adjust the distance from the right as needed
  },

  getStartedButton: {
    backgroundColor: classes.secondaryColor, // A deep blue color
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginTop: 20,
    shadowColor: 'rgba(74, 144, 226, 0.5)', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4, // Shadow elevation for Android
  },
  getStartedButtonText: {
    color: classes.tertiaryColor,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase', // Uppercase text
  },
  
});

export default Welcome;