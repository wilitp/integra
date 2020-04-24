import { useState, useEffect } from 'react';

export default () => {
  const [width, setWidth] = useState(1920);
  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth))
    }
  });
  return width
}