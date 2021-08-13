import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {CartWidget} from './components/NavBar/CartWidget/CartWidget';
import './Styles/App.css'

function App() {
  return (
    <div>
      <NavBar/>

      <ItemListContainer title="Tienda de Ropa Vintage"/> 
    </div>
    
  );
}

export default App;
