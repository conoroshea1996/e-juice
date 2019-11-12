import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNav from './components/navbar/navbar';
import ProductList from './components/productList/productList';
import Details from './components/details/details';
import Cart from './components/cart/cart';
import ProductContext from './components/Context';

function App() {
  return (
    <React.Fragment>
      <MainNav />
      <ProductContext.Provider value='hello from context'>
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </ProductContext.Provider>
    </React.Fragment>
  );
}

export default App;
