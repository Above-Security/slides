import React from 'react';
import LogoWatermark from './LogoWatermark';

const SlideLayout = ({ children }) => (
  <div className="slide-container">
    {children}
    <LogoWatermark />
  </div>
);

export default SlideLayout;
