import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function Perimetria() {
  const [isEditing, setIsEditing] = useState(false);
  const [perimetria, setPerimetria] = useState({
    peito: '',
    abdomen: '',
    ombroDireito: '',
    ombroEsquerdo: '',
    bracoDireito: '',
    bracoEsquerdo: '',
    antebracoDireito: '',
    antebracoEsquerdo: '',
    coxaDireita: '',
    coxaEsquerda: '',
    panturrilhaDireita: '',
    panturrilhaEsquerda: ''
  });

  const toggleEditMode = () => {
    if (isEditing) {
      console.log('Salvando dados:', perimetria);
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (name, value) => {
    setPerimetria({ ...perimetria, [name]: value });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View>
          <Text style={styles.userInfoText}>Nome</Text>
          <Text style={styles.userInfoText}>Objetivo</Text>
          <Text style={styles.userInfoText}>Gênero</Text>
        </View>
        <View>
          <Text style={styles.userInfoText}>Peso</Text>
          <Text style={styles.userInfoText}>Altura</Text>
          <Text style={styles.userInfoText}>Idade</Text>
        </View>
      </View>

      <ScrollView style={styles.fieldsContainer}>
        <View style={styles.row}>
          <Text>Peito</Text>
          <Text>abdômen</Text>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            value={perimetria.peito}
            onChangeText={(value) => handleInputChange('peito', value)}
            editable={isEditing}
            placeholder="Digite..."
          />
          <TextInput
            style={styles.input}
            value={perimetria.abdomen}
            onChangeText={(value) => handleInputChange('abdomen', value)}
            editable={isEditing}
            placeholder="Digite..."
          />
        </View>

        <View style={styles.row}>
          <Text>Ombro direito</Text>
          <Text>Ombro esquerdo</Text>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            value={perimetria.ombroDireito}
            onChangeText={(value) => handleInputChange('ombroDireito', value)}
            editable={isEditing}
            placeholder="Digite..."
          />
          <TextInput
            style={styles.input}
            value={perimetria.ombroEsquerdo}
            onChangeText={(value) => handleInputChange('ombroEsquerdo', value)}
            editable={isEditing}
            placeholder="Digite..."
          />
        </View>

        <View style={styles.row}>
          <Text>Braço direito</Text>
          <Text>Braço esquerdo</Text>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            value={perimetria.bracoDireito}
            onChangeText={(value) => handleInputChange('bracoDireito', value)}
            editable={isEditing}
            placeholder="Digite..."
          />
          <TextInput
            style={styles.input}
            value={perimetria.bracoEsquerdo}
            onChangeText={(value) => handleInputChange('bracoEsquerdo', value)}
            editable={isEditing}
            placeholder="Digite..."
          />
        </View>

        <View style={styles.row}>
          <Text>Antebraço direito</Text>
          <Text>Antebraço esquerdo</Text>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            value={perimetria.antebracoDireito}
            onChangeText={(value) => handleInputChange('antebracoDireito', value)}
            editable={isEditing}
            placeholder="Digite..."
          />
          <TextInput
            style={styles.input}
            value={perimetria.antebracoEsquerdo}
            onChangeText={(value) => handleInputChange('antebracoEsquerdo', value)}
            editable={isEditing}
            placeholder="Digite..."
          />
        </View>

        <View style={styles.row}>
          <Text>Coxa direita</Text>
          <Text>Coxa esquerda</Text>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            value={perimetria.coxaDireita}
            onChangeText={(value) => handleInputChange('coxaDireita', value)}
            editable={isEditing}
            placeholder="Digite..."
          />
          <TextInput
            style={styles.input}
            value={perimetria.coxaEsquerda}
            onChangeText={(value) => handleInputChange('coxaEsquerda', value)}
            editable={isEditing}
            placeholder="Digite..."
          />
        </View>

        <View style={styles.row}>
          <Text>Panturrilha direita</Text>
          <Text>Panturrilha esquerda</Text>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            value={perimetria.panturrilhaDireita}
            onChangeText={(value) => handleInputChange('panturrilhaDireita', value)}
            editable={isEditing}
            placeholder="Digite..."
          />
          <TextInput
            style={styles.input}
            value={perimetria.panturrilhaEsquerda}
            onChangeText={(value) => handleInputChange('panturrilhaEsquerda', value)}
            editable={isEditing}
            placeholder="Digite..."
          />
        </View>
      </ScrollView>

      <Button
        title={isEditing ? 'Salvar mudanças' : 'Editar perimetria'}
        onPress={toggleEditMode}
        color="#333"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 20,
  },
  userInfoText: {
    color: '#fff',
    fontSize: 16,
  },
  fieldsContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
});
