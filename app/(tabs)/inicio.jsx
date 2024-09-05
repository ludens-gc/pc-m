import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Inicio() {
  const [selectedTab, setSelectedTab] = useState('Atendimentos');

  const atendimentos = [
    { id: '1', nome: 'Nome 1' },
    { id: '2', nome: 'Nome 2' },
    { id: '3', nome: 'Nome 3' },
    { id: '4', nome: 'Nome 4' },
  ];

  const solicitacoes = [
    { id: '1', nome: 'Solicitação 1', status: 'Status' },
    { id: '2', nome: 'Solicitação 2', status: 'Status' },
    { id: '3', nome: 'Solicitação 3', status: 'Status' },
    { id: '4', nome: 'Solicitação 4', status: 'Status' },
  ];

  const renderAtendimento = ({ item }) => (
    <View style={styles.listItem}>
      <Image style={styles.avatar} source={{ uri: 'https://via.placeholder.com/50' }} />
      <Text style={styles.listText}>{item.nome}</Text>
    </View>
  );

  const renderSolicitacao = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{item.nome}</Text>
      <Text style={styles.statusButton}>{item.status}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userCard}>
        <Image style={styles.avatarLarge} source={{ uri: 'https://via.placeholder.com/100' }} />
        <View style={styles.userInfo}>
          <Text style={styles.userText}>Nome</Text>
          <Text style={styles.userText}>Email</Text>
          <Text style={styles.userText}>Objetivo</Text>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Atendimentos' && styles.tabButtonActive]}
          onPress={() => setSelectedTab('Atendimentos')}
        >
          <Text style={styles.tabText}>Atendimentos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Solicitações' && styles.tabButtonActive]}
          onPress={() => setSelectedTab('Solicitações')}
        >
          <Text style={styles.tabText}>Solicitações</Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'Atendimentos' ? (
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Meus Atendimentos</Text>
          <FlatList
            data={atendimentos}
            renderItem={renderAtendimento}
            keyExtractor={(item) => item.id}
          />
        </View>
      ) : (
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Minhas Solicitações</Text>
          <FlatList
            data={solicitacoes}
            renderItem={renderSolicitacao}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  avatarLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#aaa',
  },
  userInfo: {
    marginLeft: 20,
  },
  userText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  tabButtonActive: {
    backgroundColor: '#333',
  },
  tabText: {
    color: '#fff',
  },
  listContainer: {
    flex: 1,
  },
  listTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#eee',
    marginBottom: 10,
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  listText: {
    fontSize: 16,
  },
  statusButton: {
    padding: 5,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#aaa',
    marginRight: 10,
  },
});
