import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Audio } from 'expo-av'; // Import Audio from Expo
import Bottombar from '../layout/Bottombar';
import vocabularyData from '../Data/VocabularyData'; // Import vocabularyData
import * as Speech from 'expo-speech'; // Import Speech from Expo

const SpeakingExerciseScreen = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    return () => {
      stopAudio(); // Clean up and stop audio when the component unmounts
    };
  }, []);

  const handleNextWord = () => {
    if (currentWordIndex < vocabularyData.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  const handlePreviousWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
    }
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const stopAudio = async () => {
    await Audio.setIsEnabledAsync(false); // Disable audio before speaking
  };

  const playAudio = async () => {
    await stopAudio(); // Stop any ongoing audio before speaking

    const currentWord = vocabularyData[currentWordIndex][selectedLanguage] || vocabularyData[currentWordIndex]['english'];
    
    try {
      await Speech.speak(currentWord, {
        language: selectedLanguage.toLowerCase(),
      });
    } catch (error) {
      console.error('An error occurred while speaking: ', error);
    } finally {
      await Audio.setIsEnabledAsync(true); // Enable audio again
    }
  };

  const currentWord = vocabularyData[currentWordIndex][selectedLanguage] || vocabularyData[currentWordIndex]['english'];

  return (
    <>
      <View style={styles.container}>
        {/* Language Selection */}
        <View style={styles.languageSelection}>
          <TouchableOpacity
            style={[styles.languageButton, selectedLanguage === 'en' && styles.selectedLanguage]}
            onPress={() => handleLanguageChange('en')}
          >
            <Text style={[styles.languageButtonText, selectedLanguage === 'en' && styles.selectedLanguageText]}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.languageButton, selectedLanguage === 'fr' && styles.selectedLanguage]}
            onPress={() => handleLanguageChange('fr')}
          >
            <Text style={[styles.languageButtonText, selectedLanguage === 'fr' && styles.selectedLanguageText]}>French</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.languageButton, selectedLanguage === 'ar' && styles.selectedLanguage]}
            onPress={() => handleLanguageChange('ar')}
          >
            <Text style={[styles.languageButtonText, selectedLanguage === 'ar' && styles.selectedLanguageText]}>Arabic</Text>
          </TouchableOpacity>
        </View>

        {/* Vocabulary Word */}
        <View style={styles.wordContainer}>
          <Text style={styles.word}>
            {currentWord}
          </Text>
        </View>

        {/* Audio Pronunciation */}
        <TouchableOpacity
          style={styles.audioButton}
          onPress={playAudio}
        >
          <Text style={styles.audioButtonText}>Listen</Text>
        </TouchableOpacity>

        {/* Navigation Buttons */}
        <View style={styles.navigationContainer}>
          <TouchableOpacity
            style={styles.navigationButton}
            onPress={handlePreviousWord}
            disabled={currentWordIndex === 0}
          >
            <Text style={styles.navigationButtonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationButton}
            onPress={handleNextWord}
            disabled={currentWordIndex === vocabularyData.length - 1}
          >
            <Text style={styles.navigationButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Bottombar unreadAlerts={11} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  languageSelection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  languageButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  selectedLanguage: {
    backgroundColor: '#333',
  },
  selectedLanguageText: {
    color: '#ffffff',
  },
  languageButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  wordContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  word: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333652',
    marginBottom: 50,
  },
  audioButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  audioButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
 
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  navigationButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 3,
    alignItems: 'center',
    margin: 2,
    backgroundColor: '#333',
    marginTop: 90,
  },
  navigationButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default SpeakingExerciseScreen;
