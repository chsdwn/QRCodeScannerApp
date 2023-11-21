const lightColors = {
  skyblue: 'hsla(197, 71%, 73%, 0.9)',
  red: 'hsla(0, 100%, 50%, 0.9)',
  light: 'hsla(100, 100%, 100%, 1)',
  gray: 'hsla(0, 0%, 20%, 1)',
  dark: 'hsla(0, 0%, 0%, 1)',
};

const darkColors = {
  skyblue: 'hsla(197, 71%, 73%, 0.9)',
  red: 'hsla(0, 100%, 50%, 0.9)',
  light: 'hsla(0, 0%, 0%, 1)',
  gray: 'hsla(0, 0%, 20%, 1)',
  dark: 'hsla(100, 100%, 100%, 1)',
};

const fontSize = {
  title: 30,
  content: 20,
  label: 16,
} as const;

const roundness = {
  sm: 8,
  md: 32,
  full: 9999,
} as const;

const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 32,
  xxl: 64,
} as const;

export const lightTheme = {
  colors: lightColors,
  fontSize,
  roundness,
  spacing,
};

export const darkTheme: ITheme = {
  ...lightTheme,
  colors: darkColors,
};

export type ITheme = typeof lightTheme;
