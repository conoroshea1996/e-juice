import React, { useContext } from 'react';
import ProductContext from '../Context';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './detail.css';


function Details() {
    const { detail, addToCart } = useContext(ProductContext);
    const { img, title, price, inCart, info, id } = detail;
    return (
        <React.Fragment>
            <div class="cards">
                <nav>
                    <Link to='/'>
                        <FaArrowLeft fontSize={16} style={{ marginRight: 20 }} /> Back To All Products
                    </Link>
                </nav>
                <div class="photo">
                    <img src={img} />
                </div>
                <div class="description">
                    <h2>{title}</h2>
                    <h4>Popular House Plant</h4>
                    <h1>${price}</h1>
                    <p>{info}</p>
                    <button onClick={() => addToCart(id)} >Add to Cart</button>
                </div>
            </div >
        </React.Fragment >
    );
}

export default Details;