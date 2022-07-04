
import Header from './components/header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer nombre="USUARIO"/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
