import React from 'react';
import { useHistory } from 'react-router';
import './SingleItem.css'



const SingleItem = ({ item }) => {
    const { id, img, title, body, price } = item;
    const history = useHistory();
    const handle = () => {
        history.push({
            pathname: `/item-details/${id}`,
            state: { item },
        });
    }

    return (
        <div onClick={handle} className="single-item">
            <img src={img} alt="" />
            <h5>{title}</h5>
            <p>{body}</p>
            <h2>${price}</h2>
        </div>
    );
};

export default SingleItem;