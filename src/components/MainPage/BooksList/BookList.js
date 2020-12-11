import React from "react";
import {Button, Card, CardBody, CardColumns, CardImg, CardSubtitle, CardTitle,} from "reactstrap";
import BookCard from "./BookCard/BookCard";

const BookList = (props) => {
    return (
        <div className="mr-2 bg-light w-100 h-100 overflow-auto">
            <BookCard books={props.books}/>

            {/*<div className="row mb-2">*/}
            {/*    <div className="col-md-4">*/}
            {/*        <div*/}
            {/*            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative">*/}
            {/*            <div className="col p-4 d-flex flex-column position-static">*/}
            {/*                <strong className="d-inline-block mb-2 text-primary">World</strong>*/}
            {/*                <h3 className="mb-0">Featured post</h3>*/}
            {/*                <div className="mb-1 text-muted">Nov 12</div>*/}
            {/*                <a href="#" className="stretched-link">Continue reading</a>*/}
            {/*            </div>*/}
            {/*            <div className="col-auto d-none d-lg-block">*/}
            {/*                <img className="bd-placeholder-img"*/}
            {/*                     src="http://books.google.com/books/content?id=Dkr_V9ruJyEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className="col-md-4">*/}
            {/*        <div*/}
            {/*            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative">*/}
            {/*            <div className="col p-4 d-flex flex-column position-static">*/}
            {/*                <strong className="d-inline-block mb-2 text-primary">World</strong>*/}
            {/*                <h3 className="mb-0">Featured post</h3>*/}
            {/*                <div className="mb-1 text-muted">Nov 12</div>*/}
            {/*                <a href="#" className="stretched-link">Continue reading</a>*/}
            {/*            </div>*/}
            {/*            <div className="col-auto d-none d-lg-block">*/}
            {/*                <img className="bd-placeholder-img"*/}
            {/*                     src="http://books.google.com/books/content?id=Dkr_V9ruJyEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className="col-md-4">*/}
            {/*        <div*/}
            {/*            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative">*/}
            {/*            <div className="col p-4 d-flex flex-column position-static">*/}
            {/*                <strong className="d-inline-block mb-2 text-primary">World</strong>*/}
            {/*                <h3 className="mb-0">Featured post</h3>*/}
            {/*                <div className="mb-1 text-muted">Nov 12</div>*/}
            {/*                <a href="#" className="stretched-link">Continue reading</a>*/}
            {/*            </div>*/}
            {/*            <div className="col-auto d-none d-lg-block">*/}
            {/*                <img className="bd-placeholder-img"*/}
            {/*                     src="http://books.google.com/books/content?id=Dkr_V9ruJyEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className="col-md-4">*/}
            {/*        <div*/}
            {/*            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative">*/}
            {/*            <div className="col p-4 d-flex flex-column position-static">*/}
            {/*                <strong className="d-inline-block mb-2 text-primary">World</strong>*/}
            {/*                <h3 className="mb-0">Featured post</h3>*/}
            {/*                <div className="mb-1 text-muted">Nov 12</div>*/}
            {/*                <a href="#" className="stretched-link">Continue reading</a>*/}
            {/*            </div>*/}
            {/*            <div className="col-auto d-none d-lg-block">*/}
            {/*                <img className="bd-placeholder-img"*/}
            {/*                     src="http://books.google.com/books/content?id=Dkr_V9ruJyEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className="col-md-4">*/}
            {/*        <div*/}
            {/*            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative">*/}
            {/*            <div className="col p-4 d-flex flex-column position-static">*/}
            {/*                <strong className="d-inline-block mb-2 text-primary">World</strong>*/}
            {/*                <h3 className="mb-0">Featured post</h3>*/}
            {/*                <div className="mb-1 text-muted">Nov 12</div>*/}
            {/*                <a href="#" className="stretched-link">Continue reading</a>*/}
            {/*            </div>*/}
            {/*            <div className="col-auto d-none d-lg-block">*/}
            {/*                <img className="bd-placeholder-img"*/}
            {/*                     src="http://books.google.com/books/content?id=Dkr_V9ruJyEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className="col-md-4">*/}
            {/*        <div*/}
            {/*            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative">*/}
            {/*            <div className="col p-4 d-flex flex-column position-static">*/}
            {/*                <strong className="d-inline-block mb-2 text-primary">World</strong>*/}
            {/*                <h3 className="mb-0">Featured post</h3>*/}
            {/*                <div className="mb-1 text-muted">Nov 12</div>*/}
            {/*                <a href="#" className="stretched-link">Continue reading</a>*/}
            {/*            </div>*/}
            {/*            <div className="col-auto d-none d-lg-block">*/}
            {/*                <img className="bd-placeholder-img"*/}
            {/*                     src="http://books.google.com/books/content?id=Dkr_V9ruJyEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className="col-md-4">*/}
            {/*        <div*/}
            {/*            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative">*/}
            {/*            <div className="col p-4 d-flex flex-column position-static">*/}
            {/*                <strong className="d-inline-block mb-2 text-primary">World</strong>*/}
            {/*                <h3 className="mb-0">Featured post</h3>*/}
            {/*                <div className="mb-1 text-muted">Nov 12</div>*/}
            {/*                <a href="#" className="stretched-link">Continue reading</a>*/}
            {/*            </div>*/}
            {/*            <div className="col-auto d-none d-lg-block">*/}
            {/*                <img className="bd-placeholder-img"*/}
            {/*                     src="http://books.google.com/books/content?id=Dkr_V9ruJyEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
};

export default BookList;