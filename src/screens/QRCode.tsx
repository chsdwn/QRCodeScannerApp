import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  SafeAreaView,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Camera } from 'expo-camera';
import QRCodeSvg from 'react-native-qrcode-svg';

import { Icon, Text } from '@/components';
import { useStyles, useTheme } from '@/hooks';
import { HomeStackNavigationProp } from '@/types';

const code = Date.now().toString(36);
const { width, height } = Dimensions.get('screen');
const qrCodeSize = Math.min(width, height) * 0.45;

export const QRCode = () => {
  const theme = useTheme();
  const styles = useStyles(styleSheet);
  const navigation = useNavigation<HomeStackNavigationProp>();

  const [cameraPermissionGranted, setCameraPermissionGranted] = useState(false);
  const [cameraCanAskAgain, setCameraCanAskAgain] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkPermission = async () => {
      setLoading(true);
      const permission = await Camera.getCameraPermissionsAsync();
      setLoading(false);

      setCameraPermissionGranted(permission.granted);
      setCameraCanAskAgain(permission.canAskAgain);
    };
    checkPermission();
  }, []);

  const requestCameraPermission = async () => {
    const permission = await Camera.requestCameraPermissionsAsync();
    setCameraPermissionGranted(permission.granted);
    setCameraCanAskAgain(permission.canAskAgain);
  };

  const handleScan = () => {
    navigation.navigate('Scanner');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.qrCodeContainer}>
        <View style={styles.qrCode}>
          <QRCodeSvg
            value={code}
            size={qrCodeSize}
            backgroundColor={theme.colors.light}
            color={theme.colors.dark}
          />
        </View>
      </View>

      <View style={styles.infoContainer}>
        {loading && (
          <ActivityIndicator size="large" color={theme.colors.skyblue} />
        )}

        {!loading && !cameraPermissionGranted && cameraCanAskAgain && (
          <Pressable onPress={requestCameraPermission} style={styles.allowBtn}>
            <Icon name="CheckBold" color={theme.colors.dark} />
            <Text style={styles.allowBtnTitle}>Allow Camera Usage</Text>
          </Pressable>
        )}

        {!loading && !cameraPermissionGranted && !cameraCanAskAgain && (
          <View style={styles.cameraDeniedContainer}>
            <Icon name="ExclamationThick" color={theme.colors.red} size={48} />
            <Text numberOfLines={0} style={styles.cameraDeniedDescription}>
              You have denied camera permission. To be able to scan qr codes go
              to the app settings and grant camera access.
            </Text>
          </View>
        )}
      </View>

      {cameraPermissionGranted && (
        <Pressable
          onPress={handleScan}
          disabled={!cameraPermissionGranted}
          style={styles.scanBtn}
        >
          <Icon name="Scan" size={36} color={theme.colors.dark} />
        </Pressable>
      )}
    </SafeAreaView>
  );
};

const styleSheet = useStyles.createStyleSheet(({ theme }) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.light,
  },
  qrCodeContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrCode: {
    borderRadius: theme.spacing.xl,
    borderWidth: theme.spacing.md,
    borderColor: theme.colors.dark,
    padding: theme.spacing.lg,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  allowBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    paddingLeft: theme.spacing.md,
    borderRadius: theme.spacing.sm,
    backgroundColor: theme.colors.skyblue,
  },
  allowBtnTitle: {
    fontSize: theme.fontSize.content,
    fontWeight: '600',
    marginLeft: theme.spacing.xs,
    color: theme.colors.dark,
  },
  cameraDeniedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cameraDeniedDescription: {
    flex: 1,
    fontSize: theme.fontSize.label,
    lineHeight: theme.fontSize.label * 1.5,
    fontWeight: '500',
  },
  scanBtn: {
    position: 'absolute',
    bottom: theme.spacing.xl,
    right: theme.spacing.xl,
    borderRadius: theme.roundness.full,
    backgroundColor: theme.colors.skyblue,
    padding: theme.spacing.lg,
  },
}));
