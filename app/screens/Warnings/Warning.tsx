import React from 'react';
import { View, StyleSheet } from 'react-native';
import BackwardSectionTitle from '../../components/BackwardSectionTitle';
import ExpandedCard from '../../components/ExpandedCard';

const Warning = ({ route }) => {
  // const { subtitle } = route.params;

  const warning = {
    id: 0,
    imageSource: 'https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1-1280x720.jpg',
    title: 'Título 1',
    description: 'Hoje teremos o campeonato de futebol! Todos convidados! Venha participar do emocionante Campeonato de Futebol do Domus Condomínio! Preparados para uma competição repleta de talento, habilidade e muita diversão, convidamos todos os moradores a se unirem em',
    date: '05/06/2023 - Quarta-feira'
  }

  return (
      <View style={styles.container}>
        <BackwardSectionTitle title='Avisos' />
        <ExpandedCard
          id={warning.id}
          imageSource={warning.imageSource}
          title={warning.title}
        description={warning.description}
        date={warning.date}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Warning;