// Importe as bibliotecas necessárias
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Defina as props do componente
interface SectionTitleProps {
  title: string;
  subtitle: string;
}

// Crie o componente
const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start', // Alinha o texto à esquerda
    marginBottom: 10, // Adicione um espaço entre o título e o subtítulo
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold', // Define a fonte em negrito
  },
  subtitle: {
    fontSize: 13,
  },
});

export default SectionTitle;