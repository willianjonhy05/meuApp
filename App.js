import React, { useState } from 'react';
import { StyleSheet, Image, Text, TextInput, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';



export default function App() {

  const [idiota, setIdiota] = useState(0);
  const contaIdiota = () => setIdiota(setIdiota => setIdiota + 1 );

  const onPress = () => {
    console.log("Botão pressionado");

  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/06/will-smith.jpg?w=1024&h=674&crop=1'}}
        />
      <SafeAreaView style={styles.safeContainer}>
        <Text style={styles.headerText}>Faça seu login</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a sua senha"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={contaIdiota}>
          <Text style={styles.buttonText}>{idiota} idiotas</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  tinyLogo: {
    width: 150,
    height: 150,
    justifyContent: 'center',

  }
});
