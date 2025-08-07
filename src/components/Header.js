import { APP_LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLoginLabel, setIsLoginLabel] = useState(false);

  return(
    <div className='header'>
      <div className='logo-container'>
        <img src={APP_LOGO_URL} alt='logo' className='logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li> 
            <Link to='/'>Home</Link>
          </li>
          <li> 
            <Link to='/about'>About Us</Link>
          </li>
          <li> 
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li> 
            <Link to='/cart'>Cart</Link>
          </li>
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