import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ExpandedCardProps {
  id: number;
  imageSource: string;
  description: string;
  title: string;
  date: string;
}

const ExpandedCard: React.FC<ExpandedCardProps> = ({ imageSource, title, id, date, description }) => {
  const navigation = useNavigation();

  const imageSourceProp: ImageSourcePropType = { uri: imageSource };

  return (
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={imageSourceProp} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.dateContainer}>          
              <MaterialCommunityIcons name="calendar" size={25} color="black" />
              <Text style={styles.date}>{date}</Text>
          </View>
          <Text >{description}</Text>
          </View>
        </View>
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
  date: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    marginVertical: 18
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: 'bold',
    left: 16,
    bottom: 16,
  },
  descriptionContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  likesContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default ExpandedCard;