import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShipCard = ({ ship }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{ship.name}</Text>
    <Text style={styles.details}>Modelo: {ship.model}</Text>
    <Text style={styles.details}>Passageiros: {ship.passengers}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  details: {
    color: '#fff',
  },
});

export default ShipCard;
