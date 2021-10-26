import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrder = () => {
    return useContext(OrderContext);
}

const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState([]);

    const addOrder = (item) => {
        setOrder((prev) => {
            // console.log(prev);
            return [...prev, item]
        });
    };

    const removeOrder = (item) => {
        const result = order.filter(o => o !== item);
        setOrder(result);
    }

    const contextValue = {
        order,
        addOrder,
        removeOrder
    }

    return (
        <OrderContext.Provider value={contextValue}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderProvider;