import React from "react";

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
        <div className="container-fluid">
            <div className="row">
                {books.map(({title, authors, normalImage, categories}) => (
                    <div className="col-4 p-2">
                        <div style={{height: '200px'}} className="border rounded overflow-hidden shadow-sm d-flex flex-row">
                            <div className="p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">{categories ? categories[0] : ''}</strong>
                                <h6 className="mb-1">{title}</h6>
                            </div>
                            <div className="d-block">
                                <img className="bd-placeholder-img h-100" src={normalImage}/>
                            </div>
                        </div>
                    </div>))}
            </div>
        </div>)
};

export default bookCard;