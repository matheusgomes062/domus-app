import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setLogout } from '../store/actions/authActions';

export default function CustomDrawerContent({ navigation  }) {
  const [actualScreenName, setActualScreenName] = useState('Warnings');

  const dispatch = useDispatch();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    setActualScreenName(screenName);
  };

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer()); // Fecha o Drawer
  };

  const logout = () => {
    dispatch(setLogout());
  }

  return (
    <DrawerContentScrollView>
      <View style={styles.titleContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>domus<View style={styles.titleDot} /></Text>
        </View>

        <TouchableOpacity onPress={closeDrawer} style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" size={30} color="black" />
        </TouchableOpacity>
      </View>

        <TouchableOpacity
          style={[
            styles.drawerItem,
            actualScreenName === 'Warnings' && styles.activeDrawerItem,
          ]}
          onPress={() => navigateToScreen('Warnings')}
        >
        <MaterialCommunityIcons name="bell" size={25} color="black" style={styles.icon} />
          <Text style={styles.drawerText}>Avisos</Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.drawerItem,
          actualScreenName === 'Reservations' && styles.activeDrawerItem,
        ]}
        onPress={() => navigateToScreen('Reservations')}
      >
        <MaterialCommunityIcons name="calendar" size={25} color="black" style={styles.icon} />
        <Text style={styles.drawerText}>Reservas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.drawerItem
        ]}
        onPress={() => logout()}
      >
        <MaterialCommunityIcons name="logout" size={25} color="black" style={styles.icon} />
        <Text style={styles.drawerText}>Sair</Text>
      </TouchableOpacity>

    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#062F54',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerText: {
    fontSize: 16,
  },
  activeDrawerItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 23,
    paddingHorizontal: 20,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: 'black',
    fontSize: 36,
    fontWeight: '700',
  },
  titleDot: {
    width: 5,
    height: 5,
    backgroundColor: '#FFA500',
    marginLeft: 8,
  },
  closeIcon: {},
  itemMenuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingRight: 20
  }
});