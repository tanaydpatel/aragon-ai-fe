import React from 'react';
import PropTypes from 'prop-types';

function Input({ label, type, value, onChange, placeholder, errorMessage }) {
  return (
    <div>
      {label && (
        <label className="input-label" htmlFor="input-field">
          {label}
        </label>
      )}
      <input
        className="input-field"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {errorMessage && (
        <span className="input-error-message">{errorMessage}</span>
      )}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  errorMessage: '',
};

export default Input;
