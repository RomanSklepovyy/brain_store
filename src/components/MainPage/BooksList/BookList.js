import React, {useRef, useCallback, useState} from "react";
import BookCardPriceBlock from "./BookCard/BookCardPriceBlock";
import useBookSearch from "./useBookSearch";

const BookList = ({books, availableBooks, getProducts, processing}) => {

    const booksRemain = availableBooks-books.length;
    const observer = useRef();
    const lastBookElementRef = useCallback(node => {
        if (processing) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && booksRemain) {
                console.log('visible');
                console.log(node);
                getProducts();
            }
        });
        if (node) observer.current.observe(node)
    }, [processing, booksRemain]);

    return (
        <div className="bg-light w-100 h-100 overflow-auto rounded p-4 ">
            <div className="container-fluid ">
                <div className="row">
                    {books.map(({id, title, authors, normalImage, categories, saleability, price, currencyCode}, index) => {

                        if (books.length === index + 1) {
                            return (
                            <div key={index} ref={lastBookElementRef} className="col-4 p-2">
                                <div style={{height: '200px', cursor: 'pointer'}}
                                     className="border rounded overflow-hidden shadow-sm d-flex flex-row">
                                    <div className="p-4 d-flex flex-column position-static">
                                        <strong
                                            className="d-inline-block mb-2 text-primary">{categories ? categories[0] : ''}</strong>
                                        <h6 className="mb-1">{title}</h6>
                                    </div>
                                    <div className="d-block">
                                        <img className="bd-placeholder-img h-100" src={normalImage}
                                             alt="Image unavailable"/>
                                    </div>
                                </div>
                                <BookCardPriceBlock data={{saleability, price, currencyCode}}/>
                            </div>)
                        } else {
                             return (
                                <div key={index}  className="col-4 p-2">
                                    <div style={{height: '200px', cursor: 'pointer'}} className="border rounded overflow-hidden shadow-sm d-flex flex-row">
                                        <div className="p-4 d-flex flex-column position-static">
                                            <strong className="d-inline-block mb-2 text-primary">{categories ? categories[0] : ''}</strong>
                                            <h6 className="mb-1">{title}</h6>
                                        </div>
                                        <div className="d-block">
                                            <img className="bd-placeholder-img h-100" src={normalImage} alt="Image unavailable"/>
                                        </div>
                                    </div>
                                    <BookCardPriceBlock data = {{saleability, price, currencyCode}}/>
                                </div>)}
                    })}
                </div>
            </div>
        </div>
    )
};

export default BookList;