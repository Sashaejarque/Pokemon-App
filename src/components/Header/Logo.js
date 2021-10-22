import React from 'react';
import Logo from './Logo.png';
import { Link} from 'react-router-dom';

const Logos = () => {
  return (
    <Link to='/home'>
      <img id="1" src={Logo} className="logo" />
    </Link>
  );
};
export default Logos;
