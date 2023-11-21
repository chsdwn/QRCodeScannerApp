import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {
  BarCodeScanningResult,
  BarCodeSettings,
  Camera,
  CameraType,
} from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { HomeStackNavigationProp } from '@/types';

const barCodeScannerSettings: BarCodeSettings = {
  barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
};

export const Scanner = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();

  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = async ({ data }: BarCodeScanningResult) => {
    if (scanned) return;
    setScanned(true);

    navigation.replace('UserDetails', { id: data });
  };

  return (
    <Camera
      type={CameraType.back}
      barCodeScannerSettings={barCodeScannerSettings}
      onBarCodeScanned={handleBarCodeScanned}
      style={styles.camera}
    />
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
});
