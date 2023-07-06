import React, { Children, useEffect, useState } from 'react';
import './FadeInDown.css';

function FadeInDown ({children}){
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export {FadeInDown};