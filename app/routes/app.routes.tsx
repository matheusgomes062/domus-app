import { createDrawerNavigator } from '@react-navigation/drawer';
import Warnings from '../screens/Warnings/Index';
import Reservations from '../screens/Reservations';
import CustomDrawerContent from '../components/CustomDrawerContent';
import React from 'react';
import { View } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import Warning from '../screens/Warnings/Warning';

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        header: (props) => (
          <View>
            <CustomHeader />
          </View>
        ),
      }}
    >
    <Drawer.Screen
        name="Warnings"
        component={Warnings}
        options={{ headerTitle: (props) => <CustomHeader /> }}
    />
    <Drawer.Screen
      name="Reservations"
      component={Reservations}
      options={{ headerTitle: (props) => <CustomHeader  /> }}
      />

      <Drawer.Screen
        name="ViewWarning"
        component={Warning}
        options={{ drawerLabel: () => null }}
      />
  </Drawer.Navigator>
  );
}