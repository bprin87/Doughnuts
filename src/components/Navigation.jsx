import { useState } from 'react';
import './Navigation.css'
import logo from '../assets/images/doughnuts.svg'

function Navigation() {

   // state variable for displaying mobile menu 
   const [displayMobileMenu, setDisplayMobileMenu] = useState(false)

   // function to toggle menu when nav button clicked
   const toggleMenu = () => {
    setDisplayMobileMenu(!displayMobileMenu)
   }

   // disable the transistion effect when resizing to mobile screen
   window.addEventListener('resize', function() {
    
    let width = window.innerWidth;
    let menu = document.querySelector('nav ul');

    if (width >= 891) {
        // Disable transition when resizing to a width of 992px or more
        menu.style.transition = 'none';
    } else {
        // Re-enable the transition for smaller sizes
        menu.style.transition = '';
    }
});
    
    return (

        <header>
            <nav>
                <button className={displayMobileMenu ? 'is-active' : ''} onClick={toggleMenu}>
                    <div className="bar"></div>
                </button>
                <div className="logo">
                    <a href='./index.html'><img src={logo} alt=""></img></a>
                </div>
                <ul className={displayMobileMenu ? 'is-active' : ''}>
                    <li><a href="">Home</a></li>
                    <li><a href="">About US</a></li>
                    <li><a href="">Doughnuts</a></li>
                    <li><a href="">Wholesale</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );

}

export default Navigation;