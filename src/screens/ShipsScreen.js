import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import BackgroundImage from '../components/Background';
import ShipCard from '../components/ShipCard';

const ShipsScreen = ({ route }) => {
  const { ships } = route.params;

  const [shipDetails, setShipDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShips = async () => {
      try {
        const details = await Promise.all(ships.map((url) => axios.get(url).then((res) => res.data)));
        setShipDetails(details);
      } catch (error) {
        console.error('Erro ao buscar naves:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShips();
  }, [ships]);

  if (loading) {
    return (
      <BackgroundImage>
        <View style={styles.container}>
          <Text style={styles.message}>Carregando naves...</Text>
          <ActivityIndicator size="large" color="#fff" style={styles.loadingIcon} />
        </View>
      </BackgroundImage>
    );
  }

  return (
    <BackgroundImage>
      <View style={styles.container}>
        {shipDetails.length === 0 ? (
          <Text style={styles.message}>Não há naves disponíveis.</Text>
        ) : (
          <FlatList
            data={shipDetails}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View style={styles.shipContainer}>
                <ShipCard ship={item} />
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
  message: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  shipContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 8,
  },
});

export default ShipsScreen;
