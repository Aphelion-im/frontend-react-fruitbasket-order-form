// React.forwardRef (useRef props op componenten) - https://www.youtube.com/watch?v=0YTYqg0ETx8
import React from 'react';
import './Input.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}:</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.changeHandler}
        id={props.id}
        ref={ref}
      />
    </>
  );
});

export default Input;
