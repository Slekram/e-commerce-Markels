
import Header from './components/header/Header';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

// const [info, setInfo] = useState([])

// useEffect(()=>{
//   
// },[])

function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer nombre="USUARIO"/>
       
    </div>
  );
}

export default App;
