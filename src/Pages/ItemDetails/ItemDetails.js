/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './ItemDetails.css';

const ItemDetails = () => {
    const location = useLocation();
    const [singleItem, setSingleItem] = useState({});
    const [itemQuantity, setItemQuantity] = useState(1);

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
        setSingleItem(location.state.item);
    }, [])
    return (
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
                <button className="add-btn">
                    <FontAwesomeIcon icon={faCartPlus} className="me-3" />
                    Add
                </button>
            </div>
            <div>
                <img src={singleItem.img} alt="" />
            </div>
        </div>
    );
};

export default ItemDetails;