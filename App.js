import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CharactersScreen from './src/screens/CharactersScreen';
import CharacterDetailScreen from './src/screens/CharacterDetailScreen';
import ShipsScreen from './src/screens/ShipsScreen';
import MoviesScreen from './src/screens/MoviesScreen';
import AboutScreen from './src/screens/AboutScreen';
import BackgroundImage from './src/components/Background';

const Stack = createStackNavigator();

export default function App() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <View style={styles.container}>
      {!imageLoaded && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
      {imageLoaded && (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Characters"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#333',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen name="Characters" component={CharactersScreen} options={{ title: 'Personagens' }} />
            <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} options={{ title: 'Detalhes do Personagem' }} />
            <Stack.Screen name="Ships" component={ShipsScreen} options={{ title: 'Naves' }} />
            <Stack.Screen name="Movies" component={MoviesScreen} options={{ title: 'Filmes' }} />
            <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Sobre' }} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
      {!imageLoaded && <BackgroundImage onLoad={handleImageLoad} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
