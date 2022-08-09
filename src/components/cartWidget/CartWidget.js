import carritoLogo from '../../assets/img/cart.svg';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts/cart-context';

const CartWidget = () => {
  const cartCtx = useCartContext();

  return (
    <Link className='container-widget' to="/cart">
      <img className='button-cart' src={carritoLogo} alt='Carrito'></img>
      <div>{cartCtx.contador}</div>
    </Link>
  )
}

export default CartWidget;