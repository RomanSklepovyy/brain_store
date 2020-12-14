import React from "react";
import {Col} from "reactstrap";

const Cart = ({books}) => {

    return (
        <div className='mt-2 w-100 badge-light rounded overflow-auto' style={{height: "90vh", maxHeight: "90vh"}}>
            {books.map(book => (
                <div className="d-flex flex-row m-4" style={{height: '200px', maxHeight: '200px'}}>
                    <div className="d-block">
                        <img src={book.normalImage}/>
                    </div>
                    <div className="d-flex flex-column position-static ml-2 mr-2" style={{height: '200px', maxHeight: '200px'}}>
                        <h4>{book.title}</h4>
                        <div className="overflow-auto non-scroll">
                            <p>{book.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Cart;