import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const GenericButton = ({ text, onPress, showArrow, style = {} }) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
        <Text style={styles.arrowIconContainer}>{showArrow && <MaterialIcons name="arrow-forward" style={styles.arrowIcon} />}</Text>
      </View>
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#F1C232',
    borderRadius: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  arrowIconContainer: {
    marginLeft: 12,
  },
  arrowIcon: {
    fontSize: 20,
    color: 'black',
  },
});

export default GenericButton;