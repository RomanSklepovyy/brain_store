import React, {useRef, useCallback, useState} from "react";
import BookCardPriceBlock from "./BookCardPriceBlock";
import {Link} from "react-router-dom";

const BookList = ({books, availableBooks, getProducts, processing, addToCart, addToWanted}) => {

    const booksRemain = availableBooks-books.length;
    const observer = useRef();
    const lastBookElementRef = useCallback(node => {

        if (processing) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && booksRemain) {
                getProducts();
            }
        });

        if (node) observer.current.observe(node);

    }, [processing, booksRemain]);

    const onBookClick = (e) => {
        const container = e.target.closest('div');
        console.log(container.parentElement.dataset.id);
    };

    return (
        <div className="bg-light w-100 h-100 overflow-auto rounded p-4 ">
            <div className="container-fluid ">
                <div className="row">
                    {books.map(({id, title, authors, normalImage, categories, saleability, price, currencyCode}, index) => {

                        if (books.length === index + 1) {
                            return (
                                <div key={index} ref={lastBookElementRef} className="col-4 p-2">
                                    <Link className="text-link" to={'/' + id}>
                                        <div style={{height: '200px', cursor: 'pointer'}}
                                             className="border rounded overflow-hidden shadow-sm d-flex flex-row">
                                            <div className="p-4 d-flex flex-column position-static">
                                                <strong
                                                    className="d-inline-block mb-2 text-primary">{categories ? categories[0] : ''}</strong>
                                                <h6 className="mb-1">{title}</h6>
                                            </div>
                                            <div className="d-block">
                                                <img className="bd-placeholder-img h-100" src={normalImage}/>
                                            </div>
                                        </div>
                                    </Link>
                                    <BookCardPriceBlock data={{saleability, price, currencyCode}}/>
                                </div>)
                        } else {
                            return (
                                <div key={index} className="col-4 p-2">
                                    <Link className="text-link" to={'/' + id}>
                                        <div style={{height: '200px', cursor: 'pointer'}}
                                             className="border rounded overflow-hidden shadow-sm d-flex flex-row">
                                            <div className="p-4 d-flex flex-column position-static ">
                                                <strong
                                                    className="d-inline-block mb-2 text-primary">{categories ? categories[0] : ''}</strong>
                                                <h6 className="mb-1">{title}</h6>
                                            </div>
                                            <div className="d-block">
                                                <img className="bd-placeholder-img h-100" src={normalImage}/>
                                            </div>
                                        </div>
                                    </Link>
                                    <BookCardPriceBlock data={{saleability, price, currencyCode, id}}
                                                        addToCart={addToCart} addToWanted={addToWanted}/>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
};

export default BookList;