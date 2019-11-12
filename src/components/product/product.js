import React from 'react';

function Product({ product }) {
    console.log(product);

    return (
        <React.Fragment>
            <div className='col-12 col-md-6'>
                <div className="card" >
                    <img src={product.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.info}</p>
                        <a href="#" className="btn btn-primary">€{product.price}</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Product;