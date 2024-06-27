// SegundaTela.js
import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const SegundaTela = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à Segunda Tela!</Text>
      <Image
        style={styles.tinyLogo}
        source={{uri: 'https://m.media-amazon.com/images/M/MV5BMGI3OTI0NjctMjM2ZC00MjZiLWIxMjctODczN2M4MTFjZmY1XkEyXkFqcGdeQXJoYW5uYWg@._V1_QL75_UX500_CR0,0,500,281_.jpg'}}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  tinyLogo: {
    width: 200,
    height: 200,
    justifyContent: 'center',

  }
});

export default SegundaTela;
