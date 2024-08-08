import React, { useState, useEffect } from 'react';

const ChangeColor = () => {
  const [color, setColor] = useState('');

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className='flex justify-center items-center gap-2'>
      <button
        className='p-2 px-4 bg-green-500 rounded-md'
        onClick={() => setColor('green')}
      >
        Click me!
      </button>
    </div>
  )

}
export default ChangeColor