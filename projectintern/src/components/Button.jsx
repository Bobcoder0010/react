import React from 'react';
import Button from './Button';

const App = () => {
  return (
    <div>
      <Button text="Click me!" color="blue" onClick={() => console.log('Blue button clicked!')} />
      <Button text="Cancel" color="red" onClick={() => console.log('Red button clicked!')} />
    </div>
  )}
  export default Button