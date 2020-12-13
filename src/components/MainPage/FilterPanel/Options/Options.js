import React from "react";
import {Button, ButtonGroup} from "reactstrap";

const Options = props => {
    console.log(props);
    return (
        <div>
            <div className="m-2 d-flex flex-row">
                <h6>Sorting by:</h6>
                <Button className="btn-sm p-1 ml-2 mr-2" color="secondary">relevance </Button>
                <Button className="btn-sm p-1" color="secondary">newest</Button>
            </div>
            <div className="m-2 d-flex flex-row">
                <h6>Print type:</h6>
                <Button className="btn-sm p-1 ml-2 mr-2" color="secondary">magazines</Button>
                <Button className="btn-sm p-1" color="secondary">books</Button>
                <Button className="btn-sm p-1 ml-2" color="secondary">all</Button>
            </div>
            <div className="m-2 d-flex flex-row">
                <h6>Ebook:</h6>
                <Button className="btn-sm p-1 ml-2 mr-2" color="secondary">free</Button>
                <Button className="btn-sm p-1" color="secondary">paid</Button>
                <Button className="btn-sm p-1 ml-2 mr-2" color="secondary">all</Button>
            </div>
        </div>
    )
};

export default Options;