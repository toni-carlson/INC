import { Link } from 'react-router-dom';

function NavLinks({ closeMenu }) {
  return (
    <>
      <Link to='/' onClick={closeMenu}>Home</Link>
      <Link to='/whowehelp' onClick={closeMenu}>Who we help</Link>
      {/* <Link to='/whatweoffer' onClick={closeMenu}>What we offer</Link>
      <Link to='/whoweare' onClick={closeMenu}>Who we are</Link> */}
      <Link to='/contactus' onClick={closeMenu}>Contact us</Link>
    </>
  );
}

export default NavLinks;
