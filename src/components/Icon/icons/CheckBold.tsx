import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const CheckBold = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="M9 20.42l-6.21-6.21 2.83-2.83L9 14.77l9.88-9.89 2.83 2.83L9 20.42z"
      />
    </Svg>
  );
};
