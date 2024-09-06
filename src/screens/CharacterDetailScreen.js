import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import BackgroundImage from '../components/Background';
import translations from '../traducao/translations.json';

const CharacterDetailScreen = ({ route, navigation }) => {
  const { character } = route.params;

  const translate = (key, value) => {
    return translations[key] && translations[key][value] ? translations[key][value] : value;
  };

  return (
    <BackgroundImage>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.detailContainer}>
          <Text style={styles.characterName}>{character.name}</Text>
          
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Altura:</Text>
            <Text style={styles.infoValue}>{character.height} cm</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Peso:</Text>
            <Text style={styles.infoValue}>{character.mass} kg</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Cor do cabelo:</Text>
            <Text style={styles.infoValue}>{translate('hair_color', character.hair_color)}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Cor da pele:</Text>
            <Text style={styles.infoValue}>{translate('skin_color', character.skin_color)}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Cor dos olhos:</Text>
            <Text style={styles.infoValue}>{translate('eye_color', character.eye_color)}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Gênero:</Text>
            <Text style={styles.infoValue}>{translate('gender', character.gender)}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Ships', { ships: character.starships })}
            >
              <Text style={styles.buttonText}>Naves</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Movies', { films: character.films })}
            >
              <Text style={styles.buttonText}>Filmes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  detailContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  characterName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  infoTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 18,
    color: '#fff',
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CharacterDetailScreen;
