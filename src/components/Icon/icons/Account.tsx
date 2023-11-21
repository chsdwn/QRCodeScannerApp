import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const Account = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"
      />
    </Svg>
  );
};
