import { useEffect, useState } from 'react';

const useMousePosition = () => {
	const [ coords, setCoords ] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return coords;
}

export default useMousePosition;