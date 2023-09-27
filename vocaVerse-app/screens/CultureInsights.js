import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import Bottombar from '../layout/Bottombar';
const CultureInsightsScreen = () => {
  const languageData = [
    {
      language: 'English',
      country: 'United States',
      insights: 'English is one of the most widely spoken languages in the world, and it is the official language of many countries. It has a rich history in literature and science.',
    },
    {
      language: 'French',
      country: 'France',
      insights: 'French is known for its rich literary history and is spoken not only in France but also in various parts of the world. It is the language of love and culture.',
    },
    {
      language: 'Spanish',
      country: 'Spain',
      insights: 'Spanish is the second most spoken language globally, with a vibrant culture and diverse dialects. It is celebrated with festivals and music.',
    },
    {
      language: 'Mandarin Chinese',
      country: 'China',
      insights: 'Mandarin Chinese is the most spoken language in the world, known for its intricate characters and tonal pronunciation. It is deeply rooted in Chinese culture.',
    },
    {
      language: 'Arabic',
      country: 'Saudi Arabia',
      insights: 'Arabic is the language of the Quran and has a rich history in Islamic culture. It is known for its calligraphy and poetic expressions.',
    },
    {
      language: 'German',
      country: 'Germany',
      insights: 'German is a language of precision and engineering. It has a rich history in philosophy and is known for its compound words.',
    },
    {
      language: 'Japanese',
      country: 'Japan',
      insights: 'Japanese is a language that reflects the nuances of Japanese culture. It has three writing systems: Kanji, Hiragana, and Katakana.',
    },
    {
      language: 'Russian',
      country: 'Russia',
      insights: 'Russian is known for its Cyrillic script and rich literary tradition. It has a deep influence on classical music and ballet.',
    },
    {
      language: 'Italian',
      country: 'Italy',
      insights: 'Italian is a language of art, food, and romance. It is known for its beautiful melodies and contributions to Renaissance art and culture.',
    },
    {
      language: 'Portuguese',
      country: 'Brazil',
      insights: 'Portuguese is spoken not only in Portugal but also in Brazil, known for its vibrant Carnival and music. It has a diverse range of dialects.',
    },
    {
      language: 'Dutch',
      country: 'Netherlands',
      insights: 'Dutch is a Germanic language known for its straightforwardness. It has a rich history in trade and exploration.',
    },
    // Add more language insights here
  ];
  

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const openModal = (language) => {
    setSelectedLanguage(language);
  };

  const closeModal = () => {
    setSelectedLanguage(null);
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          {languageData.map((data, index) => (
            <TouchableOpacity
              key={index}
              style={styles.languageCard}
              onPress={() => openModal(data)}
            >
              {/* <Image
                source={require('../assets/Images/flag.png')} // Replace with the flag image for the respective country
                style={styles.flag}
              /> */}
              <Text style={styles.languageName}>{data.language}</Text>
              <Text style={styles.countryName}>{data.country}</Text>
              <Text style={styles.insights}>{data.insights.substring(0, 100)}...</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {selectedLanguage && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={!!selectedLanguage}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalLanguageName}>{selectedLanguage.language}</Text>
              <Text style={styles.modalInsights}>{selectedLanguage.insights}</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      <Bottombar unreadAlerts={11} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  languageCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  flag: {
    width: 50,
    height: 30,
    marginBottom: 10,
  },
  languageName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  countryName: {
    fontSize: 18,
    color: '#555',
  },
  insights: {
    fontSize: 16,
    color: '#777',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    maxHeight: '80%',
  },
  modalLanguageName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  modalInsights: {
    fontSize: 18,
    color: '#555',
    marginTop: 10,
  },
  closeButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
export default CultureInsightsScreen;