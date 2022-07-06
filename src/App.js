import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
