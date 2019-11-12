import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar/navbar';
import ProductList from './components/productList/productList';
import Details from './components/details/details';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
