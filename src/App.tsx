import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>QR Code Scanner Demo</Text>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
