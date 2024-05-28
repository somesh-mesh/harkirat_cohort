import { useState, useEffect } from 'react';

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return position;
};

export default useMousePointer;