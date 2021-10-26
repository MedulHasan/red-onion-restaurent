import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Button, Form } from 'react-bootstrap';

import loginLogo from '../../images/logo2.png';
import './TakeOrder.css'
import { useOrder } from '../../context/OrderProvider';
import { useHistory } from 'react-router';

const TakeOrder = () => {
    const history = useHistory();
    const { order, removeOrder, subtotal, quantity } = useOrder();
    const tax = (subtotal * (7 / 100));
    const deliveryFee = 3.00;
    const total = (subtotal + tax + deliveryFee);

    const handleBack = () => {
        history.goBack();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="take-order-container">
                {/* <button className="back-btn-h" onClick={handleBack}><FontAwesomeIcon className="me-1" icon={faChevronLeft} />Back</button> */}
                <div className="order-confirm-container">
                    <div className="login-form">
                        <div className="text-center">
                            <img src={loginLogo} alt="" className="mb-5" />
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Control className="mb-3 l-form" type="text" placeholder="City" />
                            <Form.Control className="mb-3 l-form" type="text" placeholder="Road no." />
                            <Form.Control className="mb-3 l-form" type="text" placeholder="Flat, suite or floor" />
                            <Form.Control className="mb-3 l-form" type="text" placeholder="Business Name" />
                            <Form.Control className="mb-3 l-form" type="text" placeholder="Add delivery instructor" />
                            <Button className="mb-2 w-100 l-form" variant="warning" type="submit">Save & Continue</Button>
                        </Form>
                    </div>
                    <div className="confirm-add-cart">
                        {
                            order.length > 0 ? (
                                order.map((item) => (
                                    <div className="single-add-cart mb-3" key={item.id + new Date()}>
                                        <div className="d-flex align-items-center">
                                            <img className="me-2" src={item.img} alt="" />
                                            <div>
                                                <h6>{item.title}</h6>
                                                <h4>${item.price * item.quantity}</h4>
                                                <p>Quantity: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <FontAwesomeIcon className="delete-order-item" icon={faTrash} onClick={() => removeOrder(item)} />
                                    </div>
                                ))
                            ) : (
                                <h2 className="on-order">No Order Available</h2>
                            )
                        }
                    </div>
                    <div className="pricing">
                        <div className="d-flex justify-content-between px-3">
                            <h6>Subtotal . <span>{quantity}</span> Item</h6>
                            <h6>$ <span>{subtotal}</span></h6>
                        </div>
                        <div className="d-flex justify-content-between px-3">
                            <h6>Tax</h6>
                            <h6>$ <span>{tax.toFixed(2)}</span></h6>
                        </div>
                        <div className="d-flex justify-content-between px-3">
                            <h6>Delivery fee</h6>
                            <h6>$ <span>{deliveryFee}</span></h6>
                        </div>
                        <div className="d-flex justify-content-between px-3">
                            <h6>Total</h6>
                            <h6>$ <span>{total.toFixed(2)}</span></h6>
                        </div>
                        <Button className="w-100" variant="warning" type="submit">Place Order</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TakeOrder;