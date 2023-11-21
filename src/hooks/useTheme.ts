import { useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { darkTheme, lightTheme } from '@/config/theme';

export const useTheme = () => {
  const isDark = useColorScheme() === 'dark';

  const theme = useMemo(() => {
    if (isDark) return darkTheme;
    return lightTheme;
  }, [isDark]);

  return theme;
};
