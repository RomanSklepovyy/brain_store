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
        // <div className="d-flex justify-content-center flex-row">
        //     {books.map(({title, authors, normalImage, categories}) => (
        //         <div className="d-flex flex-row">
        //             <div className="p-4 d-flex flex-column position-static">
        //                 <strong className="d-inline-block mb-2 text-primary">{categories ? categories[0] : ''}</strong>
        //                 <h5 className="mb-0">{title}</h5>
        //                 <div className="mb-1 text-muted">{getAuthors(authors)}</div>
        //             </div>
        //             <div className="d-none d-lg-block">
        //                 <img className="bd-placeholder-img"
        //                      src={normalImage}/>
        //             </div>
        //         </div>))}
        // </div>)
        <div className="container-fluid ">
            <div className="row">
                {books.map(({title, authors, normalImage, categories}) => (
                    <div className="col-4 p-2">
                        <div style={{height: '200px', cursor: 'pointer'}} className="border rounded overflow-hidden shadow-sm d-flex flex-row">
                            <div className="p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">{categories ? categories[0] : ''}</strong>
                                <h6 className="mb-1">{title}</h6>
                            </div>
                            <div className="d-block">
                                <img className="bd-placeholder-img h-100" src={normalImage}/>
                            </div>
                        </div>
                        <div style={{height: '50px'}} className="border rounded overflow-hidden shadow-sm d-flex flex-row mt-1 mb-1 p-1">
                            <button color="success" type="button" className="btn btn-success mr-auto"> <h6 className="m-auto text-bold"> 100 UAH </h6></button>
                            <button type="button" className="btn btn-secondary mr-2"> <Heart size={25} className=""/></button>
                            <button type="button" className="btn btn-secondary mr-1"> <BagPlus size={25} className=""/></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>)
};

export default bookCard;