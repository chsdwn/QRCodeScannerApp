import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const ExclamationThick = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path fill="currentColor" d="M10 3h4v11h-4V3m0 18v-4h4v4h-4z" />
    </Svg>
  );
};
