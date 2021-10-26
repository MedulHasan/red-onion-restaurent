/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './ItemDetails.css';
import { useOrder } from '../../context/OrderProvider';

const ItemDetails = () => {
    const location = useLocation();
    const history = useHistory();
    const [singleItem, setSingleItem] = useState({});
    const [itemQuantity, setItemQuantity] = useState(1);

    const { addOrder } = useOrder();

    const decreaseQuantity = () => {
        if (itemQuantity <= 1) {
            setItemQuantity(1);
        } else {
            setItemQuantity(itemQuantity - 1);
        }
    }

    const increaseQuantity = () => {
        if (itemQuantity < 1) {
            setItemQuantity(1);
        } else {
            setItemQuantity(itemQuantity + 1);
        }
    }

    useEffect(() => {
        let item = location.state.item;
        item.quantity = itemQuantity;
        setSingleItem(item)
    }, [itemQuantity])

    const handleAddItem = (item) => {
        addOrder(item);
        history.push({
            pathname: '/take-order',
            // state: { item: singleItem }
        })
    }

    const handleBack = () => {
        history.goBack();
    }
    return (
        <>
            <button className="back-btn" onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft} /></button>
            <div className="single-item-container">
                <div className="left-item">
                    <h1>{singleItem.title}</h1>
                    <p>{singleItem.description}</p>
                    <div className="price-quantity">
                        <h1>${singleItem.price}</h1>
                        <div className="quantity">
                            <button onClick={decreaseQuantity}>-</button>
                            <span>{itemQuantity}</span>
                            <button onClick={increaseQuantity} className="text-danger">+</button>
                        </div>
                    </div>
                    <button onClick={() => handleAddItem(singleItem)} className="add-btn">
                        <FontAwesomeIcon icon={faCartPlus} className="me-3" />
                        Add
                    </button>
                </div>
                <div>
                    <img src={singleItem.img} alt="" />
                </div>
            </div>
        </>
    );
};

export default ItemDetails;