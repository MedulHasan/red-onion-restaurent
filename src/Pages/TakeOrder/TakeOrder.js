import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button, Form } from 'react-bootstrap';

import loginLogo from '../../images/logo2.png';
import './TakeOrder.css'
import { useOrder } from '../../context/OrderProvider';

const TakeOrder = () => {
    const { order } = useOrder();
    const { removeOrder } = useOrder();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="take-order-container">
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
                        order.map((item) => (
                            <div className="single-add-cart mb-5" key={item.id + new Date()}>
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
                    }
                </div>
            </div>
        </div>
    );
};

export default TakeOrder;