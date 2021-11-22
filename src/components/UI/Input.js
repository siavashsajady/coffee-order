import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label>{props.label}</label>
      {/* the spread operator ensures that all the key value peirs in this input object which we recive on props input, are added as props to input */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
