import { APP_LOGO_URL } from '../utils/constants';
import { useState } from 'react';

const Header = () => {
  const [isLoginLabel, setIsLoginLabel] = useState(false);

  return(
    <div className='header'>
      <div className='logo-container'>
        <img src={APP_LOGO_URL} alt='logo' className='logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button 
            className='login-btn'
            onClick={()=> setIsLoginLabel(!isLoginLabel)}
          >
            { isLoginLabel ? 'Login' : 'Logout' }
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;