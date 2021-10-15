import React from 'react';
import { useParams } from 'react-router';

const ItemDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>This is Item Details - {id}</h2>
        </div>
    );
};

export default ItemDetails;