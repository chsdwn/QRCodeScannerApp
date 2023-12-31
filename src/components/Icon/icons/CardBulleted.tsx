import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const CardBulleted = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="M20 4a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h16m-9 9H9v2h2v-2m8 0h-6v2h6v-2M7 9H5v2h2V9m12 0H9v2h10V9z"
      />
    </Svg>
  );
};
