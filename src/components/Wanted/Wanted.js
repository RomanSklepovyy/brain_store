import React, {useEffect} from "react";
import {Button} from "reactstrap";
import {NavLink} from "react-router-dom";
import Autocomplete from "./AutocompleteWantedBooksSearch";
import BookCardPriceBlock from "../MainPage/BooksList/BookCardPriceBlock";


const Wanted = ({books, deleteBook, updateSearchQuery, updateSearchOptions, searchOptions, searchQuery, addToWanted, addToCart}) => {

    const onButtonDelete = (e) => {
        const button = e.target.closest('button');
        deleteBook(button.value);
    };

    useEffect(() => {
        updateSearchOptions()
    }, [books]);

    return (
        <div className='mt-2 w-100 badge-light rounded overflow-auto' style={{height: "90vh", maxHeight: "90vh"}}>
            <Autocomplete updateSearchQuery = {updateSearchQuery} searchOptions={searchOptions} searchQuery={searchQuery} />

            {books.map(book => (
                <div key={book.id}>
                    <div className="d-flex flex-row mt-3 mb-3 mr-5 ml-5 p-2 border rounded shadow-sm"
                         style={{height: '240px', maxHeight: '240px'}} >
                        <div className="d-block">
                            <img style={{maxHeight: '200px'}} src={book.normalImage}/>
                            <p className="text-center text-monospace font-weight-bold mt-auto mb-auto">{book.publishedDate}</p>
                        </div>
                        <div className="d-flex flex-column position-static ml-2 mr-2" style={{height: '200px', maxHeight: '200px'}}>
                            <div className="d-flex fle-raw">
                                <h4 className="mr-auto">{book.title}</h4>
                                <Button className="ml-auto" value={book.id} onClick={onButtonDelete} close />
                            </div>

                            <div className="overflow-auto non-scroll w-100">
                                <p className="font-italic">{book.description ? book.description : 'Description unavailable...'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mr-5 ml-5">
                        <BookCardPriceBlock data={{ id: book.id, currencyCode: book.currencyCode, price: book.price, saleability: book.saleability}}
                                             addToWanted={addToWanted} addToCart={addToCart}/>
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

        </div>
    )
};

export default Wanted;