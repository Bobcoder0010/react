import React, { useState } from 'react';

const Hooks = () => {
  const [color, setColor] = useState({ backgroundColor: '' });

  const handleColorChange = (newColor) => {
    setColor({ backgroundColor: newColor });
  };

  return (
    <div className="flex flex-wrap">
      <button onClick={() => handleColorChange('red')} className="p-2 px-4 bg-blue-400">
        Red
      </button>
      <button onClick={() => handleColorChange('black')} className="p-2 px-4 bg-blue-400">
        Black
      </button>
      <button onClick={() => handleColorChange('blue')} className="p-2 px-4 bg-blue-400">
        Blue
      </button>
      <button onClick={() => handleColorChange('white')} className="p-2 px-4 bg-blue-400">
        White
      </button>
      <div style={color} className="w-full h-[20rem] border-2 border-black"></div>
    </div>
  );
};

export default Hooks;
