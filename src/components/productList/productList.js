import React, { useContext, useState } from 'react';
import ProductContext from '../Context';
import Product from '../product/product';

function ProductList() {

    const data = useContext(ProductContext);
    const { products, addToCart, handleDetailItem } = data;
    return (
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <div className="row my-2">
                        {products.map(product => {
                            return <Product key={product.id} product={product} addToCart={addToCart} getItem={handleDetailItem} />
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductList;