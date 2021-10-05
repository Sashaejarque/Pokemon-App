import React from "react";
import PropTypes from 'prop-types';


export const Input = ({styleclass,placeholder,type,label,classlabel}) => {
  
  return (
      <div className={styleclass}>
        <div className={classlabel}>
        <label>{label}</label>
        </div>
        <input type={type} placeholder={placeholder} />
      </div>
  );
};

Input.propTypes = {
  styleclass: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  classlabel: PropTypes.string
}

Input.defaultProps = {
  styleclass: '',
  placeholder: '',
  type: '',
  label: '',
  classlabel: ''
}