import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

function App() {
  //useState retorna um array com 2 opções
  //1. Variavel com o seu valor inicial
  //2. Função para atualizar valor
  const [projects,setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
     setProjects(response.data);
    });
  }, []);

  async function handleAddProject(){
    //setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: 'Mateus Oliveira'
    });
    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <Header />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}

export default App;