import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { UIContextProvider } from './context/UIContext';
import { CartScreen } from './components/CartScreen/CartScreen';
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>

      <UIContextProvider>
        <CartProvider>

        <BrowserRouter>    
        <NavBar/>

        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>

          <Route exact path="/categoria/:catId">
            <ItemListContainer/>
          </Route>

          <Route exact path="/detail/:itemId">
            <ItemDetailContainer/>        
          </Route>

          <Route exact path="/cart">
            <CartScreen/>
          </Route>

          <Route exact path="/login">
            <h1>...En construcción</h1>
          </Route>          
          
          <Route path="*">
            <Redirect to="/"/>
          </Route>  

        </Switch>

        <Footer/> 
        
        </BrowserRouter>

      </CartProvider>
    </UIContextProvider>
    </>
    
  );
}

export default App;
