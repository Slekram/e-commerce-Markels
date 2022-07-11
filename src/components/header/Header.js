import './Header.css';
import logoReact from "../../assets/img/logo.svg"
import CartWidget from '../cartWidget/CartWidget';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className='divLogo'>
          <img src={logoReact} className="logo" width="100px" alt="Logo react"></img>
          <h1>El mundo de Maxi</h1>
      </div>
      <nav>
          <ul className='navUl'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/products' key={"products"}>Productos</Link>
            </li>
            <li>
              <Link to='/categoria/A' key={"A"}>A</Link>
            </li>
            <li>
              <Link to='/categoria/B' key={"B"}>B</Link>
            </li>
            <li>
              <Link to='/categoria/C' key={"C"}>C</Link>
            </li>
          </ul>
      </nav>
      <CartWidget/>
    </header>
  );
}

export default Header;