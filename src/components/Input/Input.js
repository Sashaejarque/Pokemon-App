import React,{useState} from 'react';
import './input.css';



export const Input = ({ placeholder, type, label, marginVertical=0, name, handleEvent }) => {
  
 
  
  return (
    <div className="container" style={{margin: `${marginVertical}px 0` }}>
      {label && <div className="label-wrapper">
        <label>{label}</label>
      </div> }
      <input type={type} placeholder={placeholder} className='input' name={name} onChange={handleEvent} />
    </div>
  );
};

