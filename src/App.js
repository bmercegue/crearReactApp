import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import { IndexComponent } from './components/IndexComponent/IndexComponent';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { UIContextProvider } from './context/UIContext';
import { CartScreen } from './components/CartScreen/CartScreen';
import { Footer } from './components/Footer/Footer'
import { Checkout } from './components/Checkout/Checkout';

function App() {
  return (
    <>
      
      <UIContextProvider>
        <CartProvider>
          <BrowserRouter>    
          <Navbar/>

          <Switch>
            <Route exact path="/">
              <IndexComponent/>
            </Route>

            <Route exact path="/catalogo">
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

            <Route exact path="/checkout">
              <Checkout/>
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
