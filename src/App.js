import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import Orden from './pages/Orden/Orden';

function App() {
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<ItemListContainer filtrado={"actual"}/>}></Route>
          <Route path='/categoria/:idcategoria' element={<ItemListContainer filtrado={"filtrado por categoria"}/>}></Route>
          <Route path='/item/:iditem' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/orden' element={<Orden></Orden>}></Route>
        </Routes>
      </div>
  );
}

export default App;
