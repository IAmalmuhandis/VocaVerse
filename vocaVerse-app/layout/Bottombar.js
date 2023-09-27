import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import stylesClass, { classes } from '../assets/css/styles';
import { useNavigation } from '@react-navigation/native';
// import getImageSource from '../helpers/ImageHelper';


const Bottombar = ({ unreadAlerts }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottombar}>
      <TouchableOpacity
      style={styles.bottombarItem}
      onPress={() => {
      navigation.navigate('Dashboard'); // Navigate to the Dashboard screen (home)
      }}
    >
       <FontAwesome name="home" size={30} color={classes.tertiaryColor} />
       <Text style={styles.bottombarText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottombarItem}
        onPress={() => {
          navigation.navigate('VocabularyPractice'); // Navigate to Vocabulary Practice screen
        }}
      >
        <FontAwesome name="book" size={30} color={classes.tertiaryColor} />
        <Text style={styles.bottombarText}>Vocabulary</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottombarItem}
        onPress={() => {
          navigation.navigate('SpeakingExercises'); // Navigate to Speaking Exercises screen
        }}
      >
        <FontAwesome name="microphone" size={30} color={classes.tertiaryColor} />
        <Text style={styles.bottombarText}>Speaking</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottombarItem}
        onPress={() => {
          navigation.navigate('CulturalInsights'); // Navigate to Cultural Insights screen
        }}
      >
        <FontAwesome name="globe" size={30} color={classes.tertiaryColor} />
        <Text style={styles.bottombarText}>Cultural</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottombarItem}
        onPress={() => {
          navigation.navigate('Profile'); // Navigate to Profile screen
        }}
      >
        <FontAwesome name="user" size={30} color={classes.tertiaryColor} />
        <Text style={styles.bottombarText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottombar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: classes.secondaryColor,
  },
  bottombarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottombarText: {
    marginTop: 5,
    fontSize: 12,
    color: classes.tertiaryColor,
  },
});

export default Bottombar;
