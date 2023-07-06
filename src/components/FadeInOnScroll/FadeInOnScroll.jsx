import React, { useState, useEffect, useRef, Children  } from 'react';
import ReactDOM from 'react-dom';
import "./FadeInOnScroll.css"

function FadeInOnScroll({children}) {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const elementOffset = ReactDOM.findDOMNode(ref.current).offsetTop;
        const elementHeight = ReactDOM.findDOMNode(ref.current).offsetHeight;
  
        // Calcula si el elemento está visible en la ventana
        if (scrollTop > elementOffset - windowHeight + elementHeight / 2) {
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
      <div ref={ref} className={`Sfade-in ${isVisible ? 'Svisible' : ''}`}>
        {children}
      </div>
    );
  }
  export {FadeInOnScroll}