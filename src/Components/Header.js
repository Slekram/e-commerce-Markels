import './Header.css';
import carritoLogo from '../Assets/img/cart.svg';
import logoReact from "../Assets/img/logo.svg"

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
              <a href='#'>Productos</a>
            </li>
            <li>
              <a href='#'>Nosotros</a>
            </li>
            <li>
              <a href='#'>Contacto</a>
            </li>
          </ul>
      </nav>
      <a>
        <button>
          <img src={carritoLogo} alt='Carrito'></img>
        </button>
      </a>
    </header>
  );
}

export default Header;