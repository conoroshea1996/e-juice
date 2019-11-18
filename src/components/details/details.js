import React, { useContext } from 'react';
import ProductContext from '../Context';
import { Card } from 'react-bootstrap';


function Details() {
    const { detail } = useContext(ProductContext);
    const { img, title, price, inCart } = detail;
    return (
        <React.Fragment>
            <Card className='m-1' >
                <Card.Body>
                    <Card.Img variant='top' height={300} src={img} alt={title} />
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
        </React.Fragment>
    );
}

export default Details;