import './Nav.css';

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
      
    </div>
  );
}

export default Nav;
