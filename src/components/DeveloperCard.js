import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeveloperCard = ({ developer }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{developer.name}</Text>
    <Text style={styles.message}>RA: {developer.ra}</Text>
    <Text style={styles.message}>E-mail: {developer.email}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    marginVertical: 8,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    color: '#fff',
  },
});

export default DeveloperCard;
