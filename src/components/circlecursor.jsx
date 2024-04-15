import React, { useState, useEffect } from 'react';


function CircleCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      className="fixed w-[32rem] h-[32rem] rounded-full opacity-50"
      style={{
        left: position.x - 16,
        top: position.y - 16,
        transform: 'translate(-45%, -45%)',
        background: 'radial-gradient(circle, rgba(59, 130, 246, .2) 0%, rgba(15, 23, 42, .2) 70%)',



      }}
    ></div>
  );
}

export default CircleCursor;