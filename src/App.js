import React, {Component} from 'react';

//switch is use for grouping router
//link server as anchor tag.
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render()
  {
    return (
       <React.Fragment>
          <Navbar />
              <Switch>
              //exace used below because path should be desplay exactly once. otherwise details and cart's path thnik that they should  also start from '/' because path contains / first in all of them. 
                <Route exact path="/" component = {ProductList} />
                <Route path="/details" component = {Details} />
                <Route path="/cart" component = {Cart} />
                <Route component = {Default} />
              </Switch>
       </React.Fragment>
      );
  }
}
export default App;