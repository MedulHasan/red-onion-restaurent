import React, { useEffect, useState } from 'react';
import SingleItem from '../Breakfast/SingleItem';

const Lunch = () => {
    const [lunch, setLunch] = useState([]);
    useEffect(() => {
        fetch('meals/lunch.json')
            .then(res => res.json())
            .then(data => setLunch(data))
    }, [])
    return (
        <div className="break-fast mb-5">
            {
                lunch.map(item => <SingleItem key={item.id} item={item} />)
            }
        </div>
    );
};

export default Lunch;