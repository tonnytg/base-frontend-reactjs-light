import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

const ResponsiveComponent = () => {
  const { width } = useWindowSize();

  return (
    <div>
      <h1>Window Width: {width}px</h1>
      {width > 600 ? <p>Wide screen layout</p> : <p>Small screen layout</p>}
    </div>
  );
};

export default ResponsiveComponent;
