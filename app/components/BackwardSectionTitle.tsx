import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface BackwardSectionTitleProps {
  title: string;
}

const BackwardSectionTitle: React.FC<BackwardSectionTitleProps> = ({ title }) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleBack} style={styles.backButton}>
        <MaterialCommunityIcons name="chevron-left" size={40} color="black" />
        <Text style={styles.title}>{title}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginLeft: -12,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold', // Define a fonte em negrito
  },
  subtitle: {
    fontSize: 13,
  },
});

export default BackwardSectionTitle;