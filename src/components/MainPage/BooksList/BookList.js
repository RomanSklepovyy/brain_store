import React from "react";
import BookCard from "./BookCard/BookCard";

const BookList = (props) => {
    return (
        <div className="bg-light w-100 h-100 overflow-auto rounded p-4 ">
            <BookCard books={props.books}/>
        </div>
    )
};

export default BookList;