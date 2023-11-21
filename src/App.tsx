import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { HomeRoute } from '@/routes';

export const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar />
        <HomeRoute />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
