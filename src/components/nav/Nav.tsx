// @ts-nocheck

import { useState, useEffect } from 'react';
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import Auth from "../auth/Auth";
import { Link } from "react-router-dom";
import "../../index.css";

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <ul>
        <li className="nav-menu">
          <Link style={{ color: scrolled ? 'black' : 'white' }} to='#'>[MENU]</Link>
          <ul className='submenu'>
            <li className='li-secondary'>
              <a style={{ padding: "8px 0", color: scrolled ? 'black' : 'white' }} href="/">HOME</a>
            </li>
            <li className='li-secondary'>
              <a style={{ padding: "8px 0", color: scrolled ? 'black' : 'white' }} href="/OurHistory">OurHistory</a>
            </li>
            <li className='li-secondary'>
              <a style={{ padding: "8px 0", color: scrolled ? 'black' : 'white' }} href="/Journal">Journal</a>
            </li>
          </ul>
        </li>

        <li className="nav-menu">
          <Link style={{ color: scrolled ? 'black' : 'white' }} to='#'>[SHOP]</Link>
          <ul className='submenu'>
            <li className='li-secondary'>
              <a style={{ padding: "8px 0", color: scrolled ? 'black' : 'white' }} href="/Shop">SHOP</a>
            </li>
            <li className='li-secondary'>
              <a style={{ padding: "8px 0", color: scrolled ? 'black' : 'white' }} href="/Cart">Cart</a>
            </li>
            <li className='li-secondary'>
              <a style={{ padding: "8px 0", color: scrolled ? 'black' : 'white' }} href="#"></a>
            </li>
          </ul>
        </li>
      </ul>

      <SignedOut>
        <SignInButton className="signin-button"/>
      </SignedOut>
      <SignedIn>
        <SignOutButton className="signout-button"/>
        {<Auth />}
      </SignedIn>

      <Link style={{ color: scrolled ? 'black' : 'white', margin: "20px 0 0 0" }} to='/Cart'>[ CART ]</Link>

    </div>
  );
}

export default Nav;
