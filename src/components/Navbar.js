import React, {useState, useEffect} from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    const[click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []

    );

    window.addEventListener('resize', showButton);

    return(
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/'className='navbar-logo' onClick={closeMobileMenu}>
                    Bulacan State University 
                    <i className='fab fa-typo3'></i>
                </Link>

                <div className='menu-icon' onclick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>

                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/COE' className='nav-links' onClick={closeMobileMenu}>
                            College of Engineering
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/program' className='nav-links' onClick={closeMobileMenu}> Program </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/courses' className='nav-links' onClick={closeMobileMenu}> Courses </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}> Sign Up </Link>
                    </li>
                </ul>

                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}

            </div>
        </nav>
        </>
    )
}
export default Navbar;