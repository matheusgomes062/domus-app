import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login  from "../screens/Login";
import RecoverPassword  from "../screens/RecoverPassword";
import React from "react";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login}/>
      <Screen name="RecoverPassword" component={RecoverPassword}/>
    </Navigator>
  )
}