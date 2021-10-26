import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleItem from './SingleItem/SingleItem';
import Navigation from './Navigation/Navigation';

import './Food.css';

const Foods = () => {
    const [meals, setMeals] = useState('breakfast');
    const [foodItem, setFoodItem] = useState([]);

    useEffect(() => {
        fetch('meals/foodItems.json')
            .then(res => res.json())
            .then(data => {
                const foodItems = data.filter(items => items.itemType === meals);
                setFoodItem(foodItems);
            })
    }, [meals])

    const handleFoodItems = (item) => {
        setMeals(item);
    }

    return (
        <div>
            <Navigation id="foods" handleFoodItems={handleFoodItems} meals={meals} />
            <div className="break-fast mb-5">
                {
                    foodItem.map(item => <SingleItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default Foods;