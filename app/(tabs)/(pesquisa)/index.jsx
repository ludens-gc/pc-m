import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Pesquisa() {
  const [search, setSearch] = useState('');
  const [profissionais, setProfissionais] = useState([
    { id: '1', nome: 'profissional 1', especialidade: 'especialidade 1', uf: 'SP' },
    { id: '2', nome: 'profissional 2', especialidade: 'especialidade 2', uf: 'RJ' },
    { id: '3', nome: 'profissional 3', especialidade: 'especialidade 3', uf: 'MG' },
    { id: '4', nome: 'profissional 4', especialidade: 'especialidade 4', uf: 'BA' },
  ]);

  const filteredProfissionais = profissionais.filter((profissional) =>
    profissional.nome.toLowerCase().includes(search.toLowerCase()) ||
    profissional.especialidade.toLowerCase().includes(search.toLowerCase()) ||
    profissional.uf.toLowerCase().includes(search.toLowerCase())
  );

  const renderProfissional = ({ item }) => (
    <TouchableOpacity style={styles.profissionalItem}>
      <View style={styles.profissionalInfo}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }}
          style={styles.profissionalIcon}
        />
        <View>
          <Text>{item.nome}</Text>
          <Text>{item.especialidade}</Text>
        </View>
      </View>
      <Text>{item.uf}</Text>
    </TouchableOpacity>
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
        data={filteredProfissionais}
        renderItem={renderProfissional}
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
  profissionalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 5,
  },
  profissionalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profissionalIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#aaa',
    marginRight: 10,
  },
});
