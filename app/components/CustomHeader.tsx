import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

export default function CustomHeader() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer()); // Abre a sidebar do Drawer Navigator
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer}>
        <FontAwesome name="bars" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
        <FontAwesome name="user-circle" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,  // Espaçamento à esquerda
    paddingRight: 20, // Espaçamento à direita
    width: '100%',
    height: 70,
    backgroundColor: 'white',
  },
});