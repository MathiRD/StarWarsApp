import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import BackgroundImage from '../components/Background';
import DeveloperCard from '../components/DeveloperCard';

const developers = [
  {
    name: 'Matheus Durigon',
    ra: '1134695',
    email: '1134695@atitus.edu.br',
  },
  {
    name: 'Erick De Nardi',
    ra: '1134724',
    email: '1134724@atitus.edu.br',
  },
];

const AboutScreen = () => {
  return (
    <BackgroundImage>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Desenvolvido por:</Text>
        </View>
        {developers.map((developer, index) => (
          <View key={index} style={styles.cardContainer}>
            <DeveloperCard developer={developer} />
          </View>
        ))}
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
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
});

export default AboutScreen;
