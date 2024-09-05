import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function Exercicios() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [fichas, setFichas] = useState([
    { id: '1', nome: 'Ficha 1' },
    { id: '2', nome: 'Ficha 2' },
    { id: '3', nome: 'Ficha 3' },
    { id: '4', nome: 'Ficha 4' },
  ]);

  const filteredFichas = fichas.filter((ficha) =>
    ficha.nome.toLowerCase().includes(search.toLowerCase())
  );

  const renderFicha = ({ item }) => (
      <Link href={item.id}
        style={styles.fichaItem}
        >
        <Text>{item.nome}</Text>
      </Link>
      
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
          placeholder="Pesquisar"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Image
            source={{ uri: 'https://icon-library.com/images/search-icon-white-png/search-icon-white-png-27.jpg' }}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredFichas}
        renderItem={renderFicha}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    padding: 10,
  },
  searchButton: {
    padding: 10,
    marginLeft: 10,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  list: {
    marginTop: 20,
  },
  fichaItem: {
    padding: 20,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
