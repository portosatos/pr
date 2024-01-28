import "../../index.css"
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"


function Nav() {
  return (
    <div className='nav'>
      <ul>
        <li>
          <a href="#">[MENU]</a>
          <ul className='submenu'>
            <li className='li-secondary'>
              <a href="#">HOME</a>
            </li>
            <li className='li-secondary'>
              <a href="#">OUR STORY</a>
            </li>
            <li className='li-secondary'>
              <a href="#">FEEDBACK</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">[SHOP]</a>
          <ul className='submenu'>
          <li className='li-secondary'>
              <a href="#">BUY A HOUSE</a>
            </li>
            <li className='li-secondary'>
              <a href="#">TRADE WITH US</a>
            </li>
            <li className='li-secondary'>
              <a href="#">WE MAKE HOUSE FOR YOU</a>
            </li>
          </ul>
        </li>
      </ul>



      <SignedOut>
    <SignInButton />
        {/* <p>This content is public. Only signed out users can see this.</p> */}
      </SignedOut>
      <SignedIn>
      <SignOutButton aftersignouturl="" />
        {/* <p>This content is private. Only signed in users can see this.</p> */}
      </SignedIn>
      
    </div>
  );
}

export default Nav;
