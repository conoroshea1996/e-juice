import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function Product({ product, addToCart, getItem }) {
    const { img, title, info, price, inCart, id } = product;
    return (
        <React.Fragment>
            <div className='col-12 col-md-6 '>
                <Card className='m-1' >
                    <Card.Body>
                        <Link to='/details' onClick={() => getItem(id)}>
                            <Card.Img variant='top' height={300} src={img} alt={title} />
                        </Link>
                        <Card.Title>{title}</Card.Title>
                        {/* <Card.Text>
                            {info}
                        </Card.Text> */}
                        <Card.Footer className='d-flex justify-content-around'>
                            <Card.Text>
                                ${price}
                            </Card.Text>
                            <Card.Text>
                                {inCart ? 'add to cart' : 'already in cart'}
                            </Card.Text>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
        </React.Fragment>
    );
}

export default Product;