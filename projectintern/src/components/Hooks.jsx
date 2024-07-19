import React, { useState, useEffect } from 'react';

const Hooks = () => {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState({ backgroundColor: '' });

  useEffect(() => {
    switch (true) {
      case value > 4:
        setValue(0);
        break;
      case value > 3:
        setColor({ backgroundColor: 'white' });
        break;
      case value > 2:
        setColor({ backgroundColor: 'blue' });
        break;
      case value > 1:
        setColor({ backgroundColor: 'black' });
        break;
      case value > 0:
        setColor({ backgroundColor: 'red' });
        break;
      default:
        setColor({ backgroundColor: '' });
    }
  }, [value]);

  const incrementValue = () => {
    setValue(value + 1);
  };

  return (
    <div className="flex flex-wrap">
      <button onClick={incrementValue} className="p-2 px-4 bg-blue-400">
        Increment
      </button>
      <span className="bg-black text-white text-3xl">{value}</span>
      <div style={color} className="w-full h-[20rem] border-2 border-black"></div>
    </div>
  );
};

export default Hooks;