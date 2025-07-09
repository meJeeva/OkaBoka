import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GalleryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery Screen</Text>
      <Text style={styles.content}>This is the gallery where your images will appear.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  content: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
    textAlign: 'center',
  },
});

export default GalleryScreen; 