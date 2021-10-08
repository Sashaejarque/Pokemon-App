import react from 'react';
import load from './pokeball-load.png';
import './loading.css';
import styled from 'styled-components';

export const Loading = () => {
  return (
    <div className='content-load'>
      <div className="preloader"></div>
    </div>
  );
};
