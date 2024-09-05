import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function DetalhesFicha() {
  const router = useRouter();
  const { id } = router.query;
  const [fichaDetalhes, setFichaDetalhes] = useState(null);

  useEffect(() => {
    const mockFichaData = [
      { id: '1', nome: 'Ficha 1', descricao: 'Detalhes da Ficha 1' },
      { id: '2', nome: 'Ficha 2', descricao: 'Detalhes da Ficha 2' },
      { id: '3', nome: 'Ficha 3', descricao: 'Detalhes da Ficha 3' },
      { id: '4', nome: 'Ficha 4', descricao: 'Detalhes da Ficha 4' },
    ];

    const fichaEncontrada = mockFichaData.find((ficha) => ficha.id === id);
    if (fichaEncontrada) {
      setFichaDetalhes(fichaEncontrada);
    }
  }, [id]);

  if (!fichaDetalhes) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Carregando detalhes da ficha...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Página: Detalhes da Ficha de Exercício (ID: {id})</Text>
      <Text style={styles.text}>Nome: {fichaDetalhes.nome}</Text>
      <Text style={styles.text}>Descrição: {fichaDetalhes.descricao}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
