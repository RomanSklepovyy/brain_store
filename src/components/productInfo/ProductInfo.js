import React from 'react';
import BookCardPriceBlock from "../MainPage/BooksList/BookCardPriceBlock";

const ProductInfo = ({book, addToWanted, addToCart}) => {

    const getAuthors = authors => {
        if (authors) {
            return (
                <div className="d-flex flex-row">
                    <p className="font-weight-bold mr-1">Authors:</p>
                    {authors.map(author => (<p className="ml-2 mr-2">{author}</p>))}
                </div>
            )
        } else {
            return (
                <p>Unknown authors</p>
            )
        }
    };

    return (
    <div>
        <div className="d-flex flex-row mt-3 mb-3 mr-5 ml-5 p-2 border rounded shadow-sm"
             style={{maxHeight: '70vh'}} >
            <div className="d-block">
                <img style={{maxHeight: '200px'}} src={book.normalImage}/>
                <p className="text-center text-monospace font-weight-bold mt-auto mb-auto">{book.publishedDate}</p>
            </div>
            <div className="d-flex flex-column position-static ml-2 mr-2" style={{maxHeight: '70vh'}}>
                <div className="d-flex fle-raw">
                    <h4>{book.title}</h4>
                </div>

                <div className="overflow-auto non-scroll">
                    <p className="font-italic"> {book.subtitle} </p>
                    {getAuthors(book.authors)}
                    
                    <p><span className="font-weight-bold">Publisher</span>: {book.publisher}</p>

                    <p><span className="font-weight-bold">Language</span>: {book.language}</p>

                    <p><span className="font-weight-bold">Country</span>: {book.country}</p>

                    <p><span className="font-weight-bold">Google link</span>: <a href={book.link}> click here </a></p>

                    <p className="font-italic">{book.description ? book.description : 'Description unavailable...'}</p>
                    
                </div>
            </div>
        </div>

        <div className="mr-5 ml-5">
            <BookCardPriceBlock data={book} addToCart={addToCart} addToWanted={addToWanted}/>
        </div>
    </div>
    )
};

export default ProductInfo;