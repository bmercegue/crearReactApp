import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import './Styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <>
      <BrowserRouter>    

        <NavBar/>

        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="reutiliza">
          </Route>
          <Route exact path="/categoria/:catId">
            <ItemListContainer/>
          </Route>
          <Route exact path="/detail/:itemId">
            <ItemDetailContainer/>        
          </Route>
          <Route>
            <h1 exact path="cart">...En construcción</h1>
          </Route>
          <Route>
            <h1 exact path="login">...En construcción</h1>
          </Route>          
          
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>       

      </BrowserRouter>
    </>
    
  );
}

export default App;
