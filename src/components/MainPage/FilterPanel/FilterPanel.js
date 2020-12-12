import React from "react";
import {Badge, Button} from "reactstrap";

const FilterPanel = ({filterData, updateOrderBy, updatePrintType, updateEbookType}) => {

    console.log(filterData);

    return (
        <div className="mr-2 bg-light w-100 h-100 rounded ">
            <div className="flex-wrap overflow-auto non-scroll" style={{maxHeight: "70vh",
                msFlexDirection: "row",
                msFlexWrap: "wrap",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"}}>
                {filterData.categories.map((category, index) => (
                    <div className="pl-1" key={index}>
                        <Badge color="secondary" pill className="text-lowercase">
                            {category}
                        </Badge>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default FilterPanel;