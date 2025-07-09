import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera Screen</Text>
      <Text style={styles.content}>Take a photo using your camera here.</Text>
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

export default CameraScreen; 