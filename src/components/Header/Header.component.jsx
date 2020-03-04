import React from 'react';
import {Link} from 'react-router-dom';
import './Header.style.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';

const header = () => (
    <div className='header'>
        <Link className='logo-containter' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
);

export default header;