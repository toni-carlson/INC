import './PageHeader.css';
import { Link } from 'react-router-dom';

function HeaderNavigation() {
  return (
     <div className='top-navigation'>
         <Link to='/'>Home</Link>
         <Link to='/whowehelp'>Who we help</Link>
         <Link to='/whatweoffer'>What we offer</Link>
         <Link to='/whoweare'>Who we are</Link>
         <Link to='/contactus'>Contact us</Link>
     </div>
  );
}

export default HeaderNavigation;
