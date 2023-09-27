import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Bottombar from '../layout/Bottombar';
import vocabularyData from '../Data/VocabularyData'; // Import vocabularyData

// Define the audio files
const audioFiles = {
  en: require('../assets/audio/en_apple.mp3'),
  fr: require('../assets/audio/fr_apple.mp3'),
  ar: require('../assets/audio/fr_apple.mp3'),
};

const VocabularyPracticeScreen = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

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

  return (
    <>
      <View style={styles.container}>
        {/* Language Selection */}
        <View style={styles.languageSelection}>
          <TouchableOpacity
            style={[styles.languageButton, selectedLanguage === 'en' && styles.selectedLanguage]}
            onPress={() => handleLanguageChange('en')}
          >
            <Text style={styles.languageButtonText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.languageButton, selectedLanguage === 'fr' && styles.selectedLanguage]}
            onPress={() => handleLanguageChange('fr')}
          >
            <Text style={styles.languageButtonText}>French</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.languageButton, selectedLanguage === 'ar' && styles.selectedLanguage]}
            onPress={() => handleLanguageChange('ar')}
          >
            <Text style={styles.languageButtonText}>Arabic</Text>
          </TouchableOpacity>
        </View>

        {/* Vocabulary Word */}
        <View style={styles.wordContainer}>
          <Text style={styles.word}>
            {vocabularyData[currentWordIndex][selectedLanguage] || vocabularyData[currentWordIndex][selectedLanguage]}
          </Text>
        </View>

        {/* Meaning */}
        <ScrollView style={styles.meaningContainer}>
          <Text style={styles.meaning}>
            {vocabularyData[currentWordIndex].meaning[selectedLanguage]}
          </Text>
        </ScrollView>

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
    paddingVertical: 80,
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
    margin: 2,
  },
  selectedLanguage: {
    backgroundColor: '#333',
  },
  languageButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  wordContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  word: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333652',
  },
  meaningContainer: {
    flex: 1,
    marginTop: 20,
  },
  meaning: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',

  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -5,
  },
  navigationButton: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    margin: 2,
  },
  navigationButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default VocabularyPracticeScreen;