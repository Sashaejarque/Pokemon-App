import React from 'react';
import PropTypes from 'prop-types';
import './select.css';

export const Select = ({ value, data, placeholder, label, marginVertical = 0, width = '100%', name, handleEvent }) => {
  return (
    <div className="container" style={{ margin: `${marginVertical}px 0`, width }}>
      <div className="label-form">
        <label>{label}</label>
      </div>
      <div className="wrapper">
        <select className="select" name={name} onChange={handleEvent} value={value}>
          <option className="option">{placeholder}</option>
          {data.map((item, key) => (
            <option className="option" key={key}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

Select.propTypes = {
  data: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

Select.defaultProps = {
  placeholder: '',
  label: '',
};
