import { useState, useEffect } from 'react';

export default () => {
  const [width, setWidth] = useState(1920);
  const updateWidth = () => setWidth(window.innerWidth)
  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    }
  });
  return width
}