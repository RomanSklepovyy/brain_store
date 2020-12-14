import React, {useEffect} from 'react';
import {Badge} from "reactstrap";

const CartPriceBlock = ({finalPrice, calculatePrice}) => {

    useEffect(() => {
        calculatePrice();
    });

    return (
    <div className="mt-3 mb-3 mr-5 ml-5 d-flex flex-row">
        <div style={{height: '50px'}} className="border rounded overflow-hidden shadow-sm d-flex flex-row mt-1 mb-1 p-1 mr-auto">
            <div className="mt-auto mb-auto ml-3 mr-3 h5">Final price: </div>
            <div className="mt-auto mb-auto mr-3 h5 font-weight-bold">{finalPrice.toFixed(2)}</div>
            <div className="mt-auto mb-auto mr-3 h5"><Badge color="secondary">USD</Badge></div>
        </div>
    </div>
)};

export default CartPriceBlock;