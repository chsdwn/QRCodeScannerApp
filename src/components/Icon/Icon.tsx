import React from 'react';
import { SvgProps } from 'react-native-svg';

import { lightTheme } from '@/config/theme';
import { useTheme } from '@/hooks';
import * as icons from './icons';

export interface IconProps extends Omit<SvgProps, 'width' | 'height'> {
  name: keyof typeof icons;
  size?: number;
}

export const Icon = ({
  name,
  size = lightTheme.fontSize.title,
  ...rest
}: IconProps) => {
  const theme = useTheme();
  const color = theme.colors.dark;

  const IconComponent = icons[name];

  return <IconComponent color={color} width={size} height={size} {...rest} />;
};
