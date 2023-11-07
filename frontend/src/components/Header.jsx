import React from 'react';
import "../style/components/header.css";
import logo from "../img/argentBankLogo.webp";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut } from '../server/tokenSlice';
import { useDispatch } from 'react-redux';

const Header = () => {

const dispatch = useDispatch()
const isConnected = useSelector ((state) => state.authentication.isConnected);
const user = useSelector ((state) => state.user.userData);

const handleSignOut = () => {
  dispatch(signOut())
}

    return (
       
            <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        { isConnected ? (
          <div>
            <NavLink to="/user"
            className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            { user ? `${user.userName}` : ""}
            </NavLink>
            <i className='fa fa-sign-out'></i>
            <NavLink to="/signin"
            className="main-nav-item"
            onClick={handleSignOut}>
              Sign out
            </NavLink>
          </div>
        ) : (
        
        <NavLink className="main-nav-item" to="/signin">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
        )}
        </div>

        </nav>
    );
};

export default Header;