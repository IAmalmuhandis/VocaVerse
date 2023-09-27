import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation
import Bottombar from '../layout/Bottombar';
import getImageSource from '../helpers/ImageHelper';

const Dashboard = () => {
  const navigation = useNavigation(); // Initialize the navigation object

  // User's progress (between 0 and 100)
  const userProgress = 70;

  // Calculate the width of the inner value based on the user's progress
  const innerValueWidth = `${userProgress}%`;

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome, Sani Abdullahi!</Text>
        </View>

        {/* Feature Buttons */}
        <View style={styles.featureButtons}>
          {/* Vocabulary Practice */}
          <TouchableOpacity
            style={styles.featureButton}
            onPress={() => {
              navigation.navigate('VocabularyPractice'); // Navigate to Vocabulary Practice screen
            }}
          >
            <Image
              source={getImageSource('anime1')}
              style={styles.featureIcon}
            />
            <Text style={styles.featureButtonText}>Vocabulary Practice</Text>
          </TouchableOpacity>

          {/* Speaking Exercises */}
          <TouchableOpacity
            style={styles.featureButton}
            onPress={() => {
              navigation.navigate('SpeakingExercises'); // Navigate to Speaking Exercises screen
            }}
          >
            <Image
              source={getImageSource('anime2')}
              style={styles.featureIcon}
            />
            <Text style={styles.featureButtonText}>Speaking Exercises</Text>
          </TouchableOpacity>

          {/* Cultural Insights */}
          <TouchableOpacity
            style={styles.featureButton}
            onPress={() => {
              navigation.navigate('CulturalInsights'); // Navigate to Cultural Insights screen
            }}
          >
            <Image
              source={getImageSource('anime3')}
              style={styles.featureIcon}
            />
            <Text style={styles.featureButtonText}>Cultural Insights</Text>
          </TouchableOpacity>
        </View>

        {/* Progress Tracker */}
        <View style={styles.progressTracker}>
          <Text style={styles.progressText}>Your Progress:</Text>
          <View style={styles.progressBar}>
            {/* Dynamic inner value */}
            <View style={[styles.innerValue, { width: innerValueWidth }]} />
          </View>
        </View>
      </View>
      <Bottombar unreadAlerts={11} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  header: {
    marginVertical: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  featureButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 44,
  },
  featureButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    padding: 16,
    margin: 3,
    alignItems: 'center',
  },
  featureIcon: {
    width: 64,
    height: 64,
    marginBottom: 8,
  },
  featureButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  progressTracker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  progressBar: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    height: 16,
    borderRadius: 8,
    marginHorizontal: 8,
    overflow: 'hidden', // Hide overflowing inner value
  },
  innerValue: {
    height: '100%',
    backgroundColor: 'green', // Change this to your desired inner value color
  },
});

export default Dashboard;
