import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({ value, data, styleclass, placeholder, labelclass, label }) => {
  return (
    <div className={styleclass}>
      <div className={labelclass}>
        <label>{label}</label>
      </div>
      <select className="">
        <option>{placeholder}</option>
        {data.map((item, key) => (
          <option key={key}>{item.label}</option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  data: PropTypes.array.isRequired,
  styleclass: PropTypes.string,
  placeholder: PropTypes.string,
  labelclass: PropTypes.string,
  label: PropTypes.string
};

Select.defaultProps = {
  styleclass: '',
  placeholder: '',
  labelclass: '',
  label: ''
};
