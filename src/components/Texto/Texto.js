import React from 'react';

export const Texto = ({text, textstyle}) => {
  return(
    <div className={textstyle}>
      <p>{text}</p>
    </div>
  );
}