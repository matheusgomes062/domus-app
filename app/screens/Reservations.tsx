import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GenericButton from '../components/Button';

const Reservations = () => {
  return (
      <View style={styles.homeContent}>
        <Text style={styles.homeText}>Reservas</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  homeContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  homeText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Reservations;