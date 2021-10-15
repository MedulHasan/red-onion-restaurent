import React, { useEffect, useState } from 'react';
import SingleItem from './SingleItem';
import './Breakfast.css';

const Breakfast = () => {
    const [breakfast, setBreakfast] = useState([]);

    useEffect(() => {
        fetch('meals/breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfast(data))
    }, [])

    return (
        <div className="break-fast mb-5">
            {
                breakfast.map(item => <SingleItem key={item.id} item={item} />)
            }
        </div>
    );
};

export default Breakfast;