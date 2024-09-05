import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Fichas() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Escolha uma das fichas</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('perimetria')}>
        <Text style={styles.buttonText}>Perimetria</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('exercicios')}>
        <Text style={styles.buttonText}>Exercícios</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#333',
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
