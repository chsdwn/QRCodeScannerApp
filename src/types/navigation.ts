import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackParamList = {
  QRCode: undefined;
  Scanner: undefined;
  UserDetails: { id: string };
};

export type HomeStackNavigationProp =
  NativeStackNavigationProp<HomeStackParamList>;

export type UserDetailsRouteProp = RouteProp<HomeStackParamList, 'UserDetails'>;
