import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PreviewScreen = ({ navigation }: { navigation?: any }) => {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preview Screen</Text>
      <Text style={styles.content}>Preview your selected or captured image here.</Text>
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

export default PreviewScreen; 