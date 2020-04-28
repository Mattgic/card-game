import * as React from 'react';

type Props = {
  color: string;
};

const Overlay: React.FC<Props> = ({color}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        opacity: 0.5,
        backgroundColor: color,
      }}
    />
  );
};
export default Overlay;
