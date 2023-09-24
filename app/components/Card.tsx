import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface CardProps {
  imageSource: string;
  subtitle: string;
  title: string;
  likes: number;
  id: number;
}

const Card: React.FC<CardProps> = ({ imageSource, subtitle, title, likes, id }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    // Navega para a rota "Warning" e passa o subtitle como parâmetro
    navigation.navigate('ViewWarning', { id });
  };

  const imageSourceProp: ImageSourcePropType = { uri: imageSource };

  return (
    <TouchableWithoutFeedback onPress={handleCardPress}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={imageSourceProp} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <View style={styles.likesContainer}>
            <MaterialCommunityIcons name="heart" size={25} color="black" />
            <Text>{ likes }</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'flex-start',
  },
  image: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    resizeMode: 'cover'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  title: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: 'bold',
    left: 16,
    bottom: 16,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  likesContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default Card;