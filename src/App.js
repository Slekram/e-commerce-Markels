import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Detail from './pages/Detail/Detail';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/detail' element={<Detail></Detail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
