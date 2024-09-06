import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MovieCard = ({ movie }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{movie.title}</Text>
    <Text>Diretor: {movie.director}</Text>
    <Text>Lançamento: {movie.release_date}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#d0d0d0',
    marginVertical: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MovieCard;
