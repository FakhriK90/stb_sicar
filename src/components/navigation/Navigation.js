/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import './Navigation.css'



const Navigation = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  // Get the navbar
  var navbar = document.getElementById("navig");
  
  // Get the offset position of the navbar
  var sticky = navbar&&navbar.offsetTop;
  
  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  const myFunction = () => {
    if (window.pageYOffset >= sticky) {
      navbar&&navbar.classList.add("sticky")
    } else {
      navbar&&navbar.classList.remove("sticky");
    }
  }
  useEffect(() => {
    myFunction();
  }, []);
  
  

  return (
    <div id='navig'>
        <img className='image_stb' src={require('../../image/Logo STB SICAR.png')} alt='logo_STB_SICAR'/>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        <div className="contai teal topBotomBordersIn">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <a href='' onClick={closeMobileMenu}>Nous connaître</a>
        <a href='' onClick={closeMobileMenu}>Nos fonds</a>
        <a href='' onClick={closeMobileMenu}>Responsabilité sociale</a>
        <a href='' onClick={closeMobileMenu}>Nos réalisations</a>
        <a href='' onClick={closeMobileMenu}>Actualités</a>
        <a href='' onClick={closeMobileMenu}>Contact</a>
        <a href='' onClick={closeMobileMenu}>Lexique</a>
        </ul>
        
      </div>
    </div>
  )
}

export default Navigation