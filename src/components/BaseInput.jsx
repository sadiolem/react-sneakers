import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './BaseInput.module.scss';

function BaseInput({
  type, placeholder, value, onChange, className,
}) {
  const [inputValue, setInputValue] = useState(value);

  function handleInput({ target }) {
    onChange(target.value);
    setInputValue(target.value);
  }

  return (
    <input type={type} value={inputValue} placeholder={placeholder} onInput={handleInput} className={`${styles['base-input']} ${className}`} />
  );
}

BaseInput.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  className: '',
};

BaseInput.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
  className: PropTypes.string,
};

export default BaseInput;
