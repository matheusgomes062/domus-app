import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { useSelector } from 'react-redux';

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export function Routes() {
  const userLoggedIn = useSelector((state: RootState) => state.auth.userLoggedIn);

  return (
    <NavigationContainer independent={true}>
      {userLoggedIn ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}