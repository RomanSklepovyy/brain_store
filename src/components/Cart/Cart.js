import React from "react";
import {Button} from "reactstrap";
import BookCardPriceBlock from "../MainPage/BooksList/BookCardPriceBlock";
import {BagPlus, Heart, ArrowRightCircleFill, ArrowLeftCircleFill} from "react-bootstrap-icons";
import CartPriceBlock from "./CartPriceBlock";
import {Link, NavLink} from "react-router-dom";

const Cart = ({books, addToWanted, changeAmount, deleteBook, finalPrice, calculatePrice}) => {

    const onButtonIncrease = (e) => {
        const button = e.target.closest('button');
        changeAmount(button.value, 1);
    };

    const onButtonDecrease = (e) => {
        const button = e.target.closest('button');
        changeAmount(button.value, -1);
    };

    const onButtonDelete = (e) => {
        e.stopPropagation();
        const button = e.target.closest('button');
        deleteBook(button.value);
    };

    return (
        <div className='mt-2 w-100 badge-light rounded overflow-auto' style={{height: "90vh", maxHeight: "90vh"}}>
            {books.map(book => (
                <div key={book.id}>
                    <Link className="text-link" to={'/bookInfo/' + book.id}>
                        <div className="d-flex flex-row mt-3 mb-3 mr-5 ml-5 p-2 border rounded shadow-sm"
                             style={{height: '240px', maxHeight: '240px'}} >
                            <div className="d-block">
                                <img style={{maxHeight: '200px'}} src={book.normalImage}/>
                                <p className="text-center text-monospace font-weight-bold mt-auto mb-auto">{book.publishedDate}</p>
                            </div>
                            <div className="d-flex flex-column position-static ml-2 mr-2" style={{height: '200px', maxHeight: '200px'}}>
                                <div className="d-flex fle-raw">
                                    <h4>{book.title}</h4>
                                    <Button className="ml-auto" value={book.id} onClick={onButtonDelete} close />
                                </div>

                                <div className="overflow-auto non-scroll">
                                    <p className="font-italic">{book.description ? book.description : 'Description unavailable...'}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="mt-3 mb-3 mr-5 ml-5 d-flex flex-row">
                        <div style={{height: '50px'}}
                             className="border rounded overflow-hidden shadow-sm d-flex flex-row mt-1 mb-1 p-1 mr-auto">
                            <button type="button" className="btn btn-secondary mr-auto" value={book.id}
                                    onClick={onButtonDecrease}> <ArrowLeftCircleFill size={25} /></button>
                            <button type="button" className="btn btn-warning mr-2 ml-2">
                                <h5 className="font-weight-bold text-monospace"> {book.amount} </h5> </button>
                            <button type="button" className="btn btn-secondary mr-1" value={book.id}
                                    onClick={onButtonIncrease}> <ArrowRightCircleFill size={25}/>
                            </button>
                        </div>
                        <div className="">
                            <BookCardPriceBlock data={book} addToCart={()=>{}} addToWanted={addToWanted}/>
                        </div>
                    </div>
                </div>
            ))}

            {
                !(books.length > 0) && (
                    <div className="border rounded shadow-sm m-5 p-4">
                        <h5>Please, select books in <NavLink to="/">main page</NavLink>.</h5>
                    </div>
                )
            }

            <CartPriceBlock finalPrice={finalPrice} calculatePrice={calculatePrice}/>

        </div>
    )
};

export default Cart;