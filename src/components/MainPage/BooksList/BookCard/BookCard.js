import React from "react";
import {Button, Card, CardBody, CardImg, CardSubtitle, CardTitle} from "reactstrap";

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
                <div>
                    <p>Unknown authors</p>
                </div>
            )
        }
    };

    return (
        <div className="row mb-2">
            {books.map(({title, authors, normalImage, categories}) => (
                <div className="col-md-4">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary">{categories ? categories[0] : ''}</strong>
                            <h3 className="mb-0">{title}</h3>
                            <div className="mb-1 text-muted">{getAuthors(authors)}</div>
                            <a href="#" className="stretched-link">Continue reading</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img className="bd-placeholder-img"
                                 src={normalImage}/>
                        </div>
                    </div>
                </div>))}
        </div>)
};

export default bookCard;