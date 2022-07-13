import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';

function App() {
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/products' element={<ItemListContainer nombre={"USUARIO"}/>}></Route>
          <Route path='/categoria/:idcategoria' element={<ItemListContainer nombre={"FILTRADO"}/>}></Route>
          <Route path='/item/:iditem' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
      </div>
    
  );
}

export default App;
