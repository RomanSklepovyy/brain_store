import React, {useEffect, useRef} from "react";
import {Button} from "reactstrap";

const Options = (props) => {

    let {updateOrderBy, updatePrintType, updateEbookType, printType, ebookType, orderBy, getProducts, clearBooks} = props.filterData;

    const onSortingChange = e => updateOrderBy(e.target.value);

    const onPrintTypeChange = e => updatePrintType(e.target.value);

    const onEbookTypeUpdate = e => updateEbookType(e.target.value);

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            clearBooks();
            getProducts();
        }
    });

    return (
        <div>
            <h5 className="m-2 mb-3">Filtering:</h5>

            <div className="m-2 d-flex flex-row">
                <h6>Sorting by:</h6>

                <Button className="btn-sm p-1 ml-2 mr-2" value="relevance"
                        onClick={onSortingChange} active={orderBy === 'relevance'}
                        color="secondary">relevance</Button>

                <Button className="btn-sm p-1" value="newest"
                        onClick={onSortingChange} active={orderBy === 'newest'}
                        color="secondary">newest</Button>
            </div>

            <div className="m-2 d-flex flex-row">
                <h6>Print type:</h6>

                <Button className="btn-sm p-1 ml-2 mr-2" value="magazines" disabled
                        onClick={onPrintTypeChange} active={printType === 'magazines'}
                        color="secondary">magazines</Button>

                <Button className="btn-sm p-1" value="books"
                        onClick={onPrintTypeChange} active={printType === 'books'}
                        color="secondary">books</Button>

                <Button className="btn-sm p-1 ml-2" value="all"
                        onClick={onPrintTypeChange} active={printType === 'all'}
                        color="secondary">all</Button>
            </div>

            <div className="m-2 mb-3 d-flex flex-row">
                <h6>Ebook:</h6>

                <Button className="btn-sm p-1 ml-2 mr-2" value="free-ebooks" disabled
                        onClick={onEbookTypeUpdate} active={ebookType === 'free-ebooks'}
                        color="secondary">free</Button>

                <Button className="btn-sm p-1" value="paid-ebooks" disabled
                        onClick={onEbookTypeUpdate} active={ebookType === 'paid-ebooks'}
                        color="secondary">paid</Button>

                <Button className="btn-sm p-1 ml-2 mr-2" value="ebooks" disabled
                        onClick={onEbookTypeUpdate} active={ebookType === 'ebooks'}
                        color="secondary">all</Button>
            </div>
        </div>
    )
};

export default Options;