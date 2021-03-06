import React from 'react';
import {BagPlus, Heart} from "react-bootstrap-icons";

const BookCardPriceBlock = (props) => {

    let {saleability, price, currencyCode, id} = props.data;

    const handleClickOnAddToWanted = (e) => {
        const button = e.target.closest('button');
        props.addToWanted(button.value);
    };


    const handleClickOnAddToCart = (e) => {
        const button = e.target.closest('button');
        props.addToCart(button.value);
    };

    return (
        <>
            {(saleability === 'NOT_FOR_SALE') ?
                <div style={{height: '50px'}}
                     className="border rounded overflow-hidden shadow-sm d-flex flex-row mt-1 mb-1 p-1">
                    <button disabled type="button" className="btn btn-warning mr-auto">
                        <h6 className="m-auto text-bold"> Unavailable </h6></button>
                    <button type="button" className="btn btn-secondary mr-2 ml-2"  value={id}
                            onClick={handleClickOnAddToWanted}><Heart size={25}/></button>
                    <button disabled type="button" className="btn btn-secondary mr-1"><BagPlus size={25}/></button>
                </div> :
                <>
                    {saleability === 'FREE' ?
                        <div style={{height: '50px'}}
                             className="border rounded overflow-hidden shadow-sm d-flex flex-row mt-1 mb-1 p-1">
                            <button type="button" className="btn btn-warning mr-auto" value={id}
                                    onClick={handleClickOnAddToCart}> <h6 className="m-auto text-bold"> FREE </h6></button>
                            <button type="button" className="btn btn-secondary mr-2 ml-2" value={id}
                                    onClick={handleClickOnAddToWanted}> <Heart size={25}/></button>
                            <button type="button" className="btn btn-secondary mr-1" value={id}
                                    onClick={handleClickOnAddToCart}> <BagPlus size={25}/>
                            </button>
                        </div>
                        :
                        <div style={{height: '50px'}}
                             className="border rounded overflow-hidden shadow-sm d-flex flex-row mt-1 mb-1 p-1">
                            <button type="button" className="btn btn-success mr-auto" value={id} onClick={handleClickOnAddToCart}>
                                <h6 className="m-auto text-bold"> {price} {currencyCode} </h6></button>
                            <button type="button" className="btn btn-secondary mr-2 ml-2" value={id}
                                    onClick={handleClickOnAddToWanted}><Heart size={25}/></button>
                            <button type="button" className="btn btn-secondary mr-1" value={id}
                                    onClick={handleClickOnAddToCart}><BagPlus size={25}/></button>
                        </div>}
                </>
            }

        </>
    )
};

export default BookCardPriceBlock;