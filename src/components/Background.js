import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const BackgroundImage = ({ children, onLoad }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/BackgroundImage.png')}
        style={styles.background}
        imageStyle={styles.image}
        onLoad={onLoad}
      >
        <View style={styles.overlay} />
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  image: {
    opacity: 0.6,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default BackgroundImage;
