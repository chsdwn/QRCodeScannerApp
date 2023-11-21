import React from 'react';
import { View } from 'react-native';

import { useStyles, useTheme } from '@/hooks';
import { Icon, IconProps } from '../Icon';
import { Text } from '../Text';

type Props = {
  label: string;
  iconName: IconProps['name'];
};

export const UserInfoLabel = ({ label, iconName }: Props) => {
  const theme = useTheme();
  const styles = useStyles(styleSheet);

  return (
    <View style={styles.container}>
      <Icon name={iconName} color={theme.colors.skyblue} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styleSheet = useStyles.createStyleSheet(({ theme }) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    padding: theme.spacing.sm,
    paddingVertical: theme.spacing.sm,
  },
  label: {
    fontSize: theme.fontSize.label,
    fontWeight: '500',
    marginLeft: theme.spacing.lg,
    flex: 1,
  },
}));
