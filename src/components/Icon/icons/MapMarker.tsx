import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const MapMarker = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="M12 11.5A2.5 2.5 0 019.5 9 2.5 2.5 0 0112 6.5 2.5 2.5 0 0114.5 9a2.5 2.5 0 01-2.5 2.5M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z"
      />
    </Svg>
  );
};
