import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

import { useStyles } from '@/hooks';

export const Text = ({ style, children, ...rest }: TextProps) => {
  const styles = useStyles(styleSheet);

  return (
    <RNText style={[styles.text, style]} numberOfLines={1} {...rest}>
      {children}
    </RNText>
  );
};

const styleSheet = useStyles.createStyleSheet(({ theme }) => ({
  text: {
    color: theme.colors.dark,
    fontSize: theme.fontSize.content,
  },
}));
