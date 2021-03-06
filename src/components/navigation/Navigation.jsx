import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import CrwnLogo from '../../assets/crown.svg?component';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../context/User';
import './navigation.scss';

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              {''}
              SIGN OUT {''}
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};
