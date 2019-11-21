import React, { useContext } from 'react';
import ProductContext from '../Context';
import { Card } from 'react-bootstrap';

function Cart() {
    const { cartItems, removeFromCart } = useContext(ProductContext);
    console.log(cartItems);
    return (
        <React.Fragment>
            {cartItems.map(item => {
                return (<Card className='m-1' >
                    <Card.Body>
                        <Card.Img variant='top' height={300} src={item.img} alt={item.title} />
                        <Card.Title>{item.title}</Card.Title>
                        {/* <Card.Text>
                            {info}
                        </Card.Text> */}
                        <Card.Footer className='d-flex justify-content-around'>
                            <Card.Text>
                                ${item.price}
                            </Card.Text>
                            <Card.Text>
                                {item.inCart ? 'add to cart' : 'already in cart'}
                                <button onClick={() => removeFromCart(item.id)} >Remove From Cart</button>
                            </Card.Text>
                        </Card.Footer>
                    </Card.Body>
                </Card>)
            })}

        </React.Fragment>
    );
}

export default Cart;