
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import BackgroundImage from '../components/Background';
import { format } from 'date-fns';

const MoviesScreen = ({ route }) => {
  const { films } = route.params;

  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const details = await Promise.all(films.map((url) => axios.get(url).then((res) => res.data)));
        setMovieDetails(details);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [films]);

  if (loading) {
    return (
      <BackgroundImage>
        <View style={styles.container}>
          <Text style={styles.message}>Carregando filmes...</Text>
          <ActivityIndicator size="large" color="#fff" style={styles.loadingIcon} />
        </View>
      </BackgroundImage>
    );
  }

  return (
    <BackgroundImage>
      <View style={styles.container}>
        {movieDetails.length === 0 ? (
          <Text style={styles.message}>Não há filmes disponíveis.</Text>
        ) : (
          <FlatList
            data={movieDetails}
            keyExtractor={(item) => item.url}
            renderItem={({ item }) => (
              <View style={styles.movieContainer}>
                <Text style={styles.movieTitle}>{item.title}</Text>
                <Text style={styles.movieDetail}>Diretor: {item.director}</Text>
                <Text style={styles.movieDetail}>
                  Data de Lançamento: {format(new Date(item.release_date), 'dd/MM/yyyy')}
                </Text>
              </View>
            )}
          />
        )}
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingIcon: {
    paddingTop: 20,
    alignSelf: 'center',
  },
  movieContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 8,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  movieDetail: {
    fontSize: 16,
    color: '#fff',
  },
  message: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MoviesScreen;
