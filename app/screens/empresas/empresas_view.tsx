import { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { styles } from './empresas.style';

interface Company {
  id: string;
  name: string;
  description: string;
}

export default function Companies() {
  const [companies, setCompanies] = useState<Company[]>([]); // Define explicitamente o tipo pra não dar o erro que passamos minutos tentando achar kkkkk

  // Função para renderizar cada item da lista de maneira dinâmica
  const renderCompany = ({ item }: { item: Company }) => (
    <TouchableOpacity style={styles.companyContainer}>
      <Text style={styles.companyName}>{item.name}</Text>
      <Text style={styles.companyDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    // Aqui está sendo feita uma pequena simulação do carregamento dos dados com o setTimeout() uma vez que o backend ainda não está pronto
    const timeout = setTimeout(() => {
      setCompanies([
        { id: '1', name: 'Empresa A', description: 'Descrição da empresa A' },
        { id: '2', name: 'Empresa B', description: 'Descrição da empresa B' },
        { id: '3', name: 'Empresa C', description: 'Descrição da empresa C' },
      ]);
    }, 2000);

    // Limpando o timeout quando o componente for desmontado
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View>
      <FlatList
        data={companies}
        keyExtractor={(item) => item.id}
        renderItem={renderCompany}
      />
    </View>
  );
}
