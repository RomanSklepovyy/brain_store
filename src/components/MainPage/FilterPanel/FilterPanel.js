import React from "react";
import {Button} from "reactstrap";

const FilterPanel = (props) => {

    const onClick = () => {
        props.getProducts('math');
    };

    return (
        <div className="mr-2 bg-light w-100 h-100">
            <Button onClick={onClick}> GET</Button>
        </div>
    )
};

export default FilterPanel;