import React, {useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App(){
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log('ENTROU!');
    api.get('projects')
      .then(response => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch(error =>{
        console.log(error);
      })
  }, []);

  async function handleAddProject(){
    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: 'Mateus Oliveira'
    });
    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity 
          activeOpacity={0.6} 
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },

  project: {
    color: '#FFF',
    fontSize: 30
  },

  button: {
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    margin: 20, 
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center' 
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})

// Não possuem valor semântico (significado)
// Não possuem estilização própria
// Não possuem horança de estilização
// Todos componentes possuem por padrão "display: flex"

// View: div, footer, header, etc
// Text: p, span, strong, h1, etc