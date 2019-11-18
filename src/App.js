import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNav from './components/navbar/navbar';
import ProductList from './components/productList/productList';
import Details from './components/details/details';
import Cart from './components/cart/cart';
import ProductContext from './components/Context';
import { ProductStock, detailProduct } from './data';


function App() {
  let [products, setProducts] = useState(ProductStock);
  let [detail, setdetailProduct] = useState(detailProduct);
  let [cartItems, setCartItems] = useState([]);

  // get item by id in products
  const getItem = (id) => {
    const item = products.find(item => item.id === id);
    return item
  }
  const handleDetailItem = (id) => {
    const product = getItem(id);
    setdetailProduct(product);
  }

  const addToCart = (id) => {
    console.log('added to cart');
    const item = getItem(id);
    setCartItems([...cartItems, item]);
  }

  return (
    <React.Fragment>
      <MainNav />
      <ProductContext.Provider value={{
        products,
        detail,
        addToCart,
        handleDetailItem,
        cartItems
      }}>
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
