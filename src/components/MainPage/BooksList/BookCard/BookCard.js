import React from "react";
import {Cart} from "react-bootstrap-icons";
import {HeartFill, Heart, BagPlus, BagCheckFill} from 'react-bootstrap-icons';
import {Badge} from "reactstrap";

const bookCard = ({books}) => {

    const getAuthors = authors => {
        if (authors) {
            return (
                <div>
                    {authors.map(author => (<p>{author}</p>))}
                </div>
            )
        } else {
            return (
                    <p>Unknown authors</p>
            )
        }
    };

    return (
        <div className="container-fluid ">
            <div className="row">
                {books.map(({id, title, authors, normalImage, categories, saleability, price, currencyCode}) => (
                    <div key={id} className="col-4 p-2">
                        <div style={{height: '200px', cursor: 'pointer'}} className="border rounded overflow-hidden shadow-sm d-flex flex-row">
                            <div className="p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">{categories ? categories[0] : ''}</strong>
                                <h6 className="mb-1">{title}</h6>
                            </div>
                            <div className="d-block">
                                <img className="bd-placeholder-img h-100" src={normalImage}/>
                            </div>
                        </div>

                        {saleability === 'NOT_FOR_SALE' || saleability === 'FREE' ?
                            <div style={{height: '50px'}}
                                 className="border rounded overflow-hidden shadow-sm d-flex flex-row mt-1 mb-1 p-1">
                                <button disabled type="button" className="btn btn-warning mr-auto">
                                    {saleability === 'FREE' ? <h6 className="m-auto text-bold"> FREE </h6>
                                        : <h6 className="m-auto text-bold"> Not for sale </h6>} </button>
                                <button type="button" className="btn btn-secondary mr-2"><Heart size={25}/></button>
                                <button disabled type="button" className="btn btn-secondary mr-1"><BagPlus size={25}/></button>
                            </div>
                            :
                            <div style={{height: '50px'}}
                                 className="border rounded overflow-hidden shadow-sm d-flex flex-row mt-1 mb-1 p-1">
                                <button type="button" className="btn btn-success mr-auto"><h6
                                    className="m-auto text-bold"> {price} {currencyCode} </h6></button>
                                <button type="button" className="btn btn-secondary mr-2"><Heart size={25}/></button>
                                <button type="button" className="btn btn-secondary mr-1"><BagPlus size={25}/></button>
                            </div>}

                    </div>
                ))}
            </div>
        </div>)
};

export default bookCard;