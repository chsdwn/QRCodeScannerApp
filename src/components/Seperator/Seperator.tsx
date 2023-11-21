import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useStyles } from '@/hooks';

export const Seperator = () => {
  const styles = useStyles(styleSheet);

  return <View style={styles.seperator} />;
};

const styleSheet = useStyles.createStyleSheet(({ theme }) => ({
  seperator: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.skyblue,
  },
}));
