import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrder = () => {
    return useContext(OrderContext);
}


const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const addOrder = (item) => {
        setOrder((prev) => {
            const items = [...order, item];
            const uniqueItems = [...items.reduce((map, obj) => map.set(obj.id, obj), new Map()).values()];
            calculatePrice(uniqueItems);
            return uniqueItems;
        });
    };

    const removeOrder = (item) => {
        const result = order.filter(o => o !== item);
        setOrder(result);
        calculatePrice(result);
    };

    const calculatePrice = (order) => {
        // console.log(order);
        const subtotal = order.map(item => parseFloat(item.price).toFixed(2) * item.quantity);
        const quant = order.map(item => item.quantity);
        let total = 0;
        for (let t of subtotal) {
            total = total + t;
        }
        let quan = 0;
        for (let q of quant) {
            quan = quan + q;
        }
        setQuantity(quan);
        setSubtotal(total);
    }

    const contextValue = {
        order,
        subtotal,
        quantity,
        addOrder,
        removeOrder,
    }

    return (
        <OrderContext.Provider value={contextValue}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderProvider;