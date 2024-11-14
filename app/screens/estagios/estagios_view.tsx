import { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { styles } from './estagios.style'; // Importando os estilos

interface Stage {
  id: string;
  title: string;
  description: string;
}

export default function Stages() {
  const [stages, setStages] = useState<Stage[]>([]);

  // Função para renderizar cada item da lista de estágios
  const renderStage = ({ item }: { item: Stage }) => (
    <TouchableOpacity style={styles.stageContainer}>
      <Text style={styles.stageTitle}>{item.title}</Text>
      <Text style={styles.stageDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    // Simulando o carregamento de dados com setTimeout
    const timeout = setTimeout(() => {
      setStages([
        { id: '1', title: 'Estágio em Desenvolvimento Front-end', description: 'Descrição sobre estágio em front-end' },
        { id: '2', title: 'Estágio em Desenvolvimento Backend', description: 'Descrição sobre estágio em backend' },
        { id: '3', title: 'Estágio em Design Gráfico', description: 'Descrição sobre estágio em design gráfico' },
      ]);
    }, 2000);

    // Limpando o timeout quando o componente for desmontado
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View>
      <FlatList
        data={stages}
        keyExtractor={(item) => item.id}
        renderItem={renderStage}
      />
    </View>
  );
}
