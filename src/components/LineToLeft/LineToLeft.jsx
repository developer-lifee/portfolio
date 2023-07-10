import React, { useState, useEffect, useRef, Children  } from 'react';
import ReactDOM from 'react-dom';
import "./LineToLeft.css"

function LineToLeft() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const elementOffset = ReactDOM.findDOMNode(ref.current).offsetTop;
        const elementHeight = ReactDOM.findDOMNode(ref.current).offsetHeight;
  
        // Calcula si el elemento está visible en la ventana
        if (scrollTop > elementOffset - windowHeight + elementHeight / 4) {
          setIsVisible(true);
        }
      };
  
      // Agrega un listener para el evento 'scroll'
      window.addEventListener('scroll', handleScroll);
  
      // Limpia el listener cuando el componente se desmonta
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const ref = useRef(null);
  
    return (
      <>
        <div ref={ref} className={`lineL ${isVisible ? 'line--animateL' : ''}`}>
          {/* Contenido de la línea */}
        </div>
        <div className='space'></div>
      </>
    );
  }
  export {LineToLeft}