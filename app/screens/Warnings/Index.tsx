import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import SectionTitle from '../../components/SectionTitle';
import Card from '../../components/Card';

const Home = () => {
    const warnings = [
      {
        id: 0,
        imageSource: 'https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1-1280x720.jpg',
        subtitle: 'Aviso 1',
        title: 'Título 1',
        likes: 10,
      },
      {
        id: 1,
        imageSource: 'https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1-1280x720.jpg',
        subtitle: 'Aviso 2',
        title: 'Título 2',
        likes: 20,
      },
      {
        id: 2,
        imageSource: 'https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1-1280x720.jpg',
        subtitle: 'Aviso 3',
        title: 'Título 3',
        likes: 30,
      },
      {
        id: 3,
        imageSource: 'https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1-1280x720.jpg',
        subtitle: 'Aviso 4',
        title: 'Título 4',
        likes: 2,
      },
      {
        id: 4,
        imageSource: 'https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1-1280x720.jpg',
        subtitle: 'Aviso 4',
        title: 'Título 4',
        likes: 2,
      },
      {
        id: 5,
        imageSource: 'https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1-1280x720.jpg',
        subtitle: 'Aviso 4',
        title: 'Título 4',
        likes: 2,
      },
  ];

  return (
    <View style={styles.container}>
      <SectionTitle title='Avisos' subtitle='Seus avisos diários em um só lugar!' />
      <ScrollView style={styles.cardContainer}>
        {warnings.map((warning, index) => (
          <Card
            key={index}
            id={warning.id}
            imageSource={warning.imageSource}
            subtitle={warning.subtitle}
            title={warning.title}
            likes={warning.likes}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardContainer: {
    flex: 1,
  },
});

export default Home;