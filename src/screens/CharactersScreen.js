import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import BackgroundImage from '../components/Background';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CharactersScreen = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState('https://swapi.dev/api/people/');
  const [hasMore, setHasMore] = useState(true);

  const fetchCharacters = async () => {
    if (!nextUrl) return;
    
    setLoading(true);

    try {
      const response = await axios.get(nextUrl);
      setCharacters(prevCharacters => [...prevCharacters, ...response.data.results]);
      setNextUrl(response.data.next);
      setHasMore(!!response.data.next);
    } catch (error) {
      console.error('Erro ao buscar personagens:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleLoadMore = () => {
    if (hasMore && !loading) {
      fetchCharacters();
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon 
          name="help-circle-outline"
          size={24}
          color="#fff"
          style={{ marginRight: 15 }}
          onPress={() => navigation.navigate('About')}
        />
      ),
    });
  }, [navigation]);

  return (
    <BackgroundImage>
      <View style={styles.container}>
        <FlatList
          data={characters}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <CharacterCard
              character={item}
              onPress={() => navigation.navigate('CharacterDetail', { character: item })}
            />
          )}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={loading ? <Text style={styles.loadingText}>Carregando mais...</Text> : null}
        />
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CharactersScreen;
