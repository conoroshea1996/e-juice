import React, { useContext } from 'react';
import ProductContext from '../Context';
import './detail.css';


function Details() {
    const { detail } = useContext(ProductContext);
    const { img, title, price, inCart, info } = detail;
    return (
        <React.Fragment>
            <div class="cards">
                <nav>

                </nav>
                <div class="photo">
                    <img src={img} />
                </div>
                <div class="description">
                    <h2>{title}</h2>
                    <h4>Popular House Plant</h4>
                    <h1>${price}</h1>
                    <p>{info}</p>
                    <button>Add to Cart</button>
                    <button>Wishlist</button>
                </div>
            </div >
        </React.Fragment >
    );
}

export default Details;