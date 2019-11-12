import React, { useContext, useState } from 'react';
import ProductContext from '../Context';
import Product from '../product/product';

function ProductList() {

    const data = useContext(ProductContext);
    const { products } = data;
    return (
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        {products.map(x => {
                            return <Product />
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductList;