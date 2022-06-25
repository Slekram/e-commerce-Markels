import carritoLogo from '../../assets/img/cart.svg';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <button className='buttonCart'>
          <img src={carritoLogo} alt='Carrito'></img>
        </button>
    )
}

export default CartWidget;