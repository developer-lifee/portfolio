import React, { Children, useEffect, useState } from 'react';
import './FadeInUp.css';

function FadeInUp (props){
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
        // Código a ejecutar después de 2 segundos
        setIsVisible(true);

      }, props.time)
    ;
  }, []);

  return (
    <div className={`Ufade-in ${isVisible ? 'Uvisible' : ''}`}>
      {props.children}
    </div>
  );
};

export {FadeInUp};