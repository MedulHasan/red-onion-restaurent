import React, { useEffect, useState } from 'react';
import SingleItem from '../Breakfast/SingleItem';

const Dinner = () => {
    const [dinner, setDinner] = useState([]);
    useEffect(() => {
        fetch('meals/dinner.json')
            .then(res => res.json())
            .then(data => setDinner(data))
    }, [])
    return (
        <div className="break-fast mb-5">
            {
                dinner.map(item => <SingleItem key={item.id} item={item} />)
            }
        </div>
    );
};

export default Dinner;