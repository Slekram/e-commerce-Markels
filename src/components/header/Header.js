import './Header.css';
import logoReact from "../../assets/img/logo.svg"
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className='div-logo'>
          
          <Link to="/"><img src={logoReact} className="logo" width="100px" alt="Logo react"></img></Link>
          <h1>El mundo de Maxi</h1>
          
      </div>
      <nav>
          <ul className='nav-ul'>
            <li>
              <Link to='/' key={"products"}>Productos</Link>
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