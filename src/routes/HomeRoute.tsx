import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { HomeStackParamList } from '@/types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const QRCode = () => <></>;
const Scanner = () => <></>;
const UserDetails = () => <></>;

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="QRCode" component={QRCode} />
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
    </Stack.Navigator>
  );
};
