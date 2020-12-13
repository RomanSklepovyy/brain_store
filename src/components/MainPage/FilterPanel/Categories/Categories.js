import React from "react";
import {Badge} from "reactstrap";

const Categories = ({categories, category, updateCategory}) => {
    const onClickHandle = (e) => updateCategory(e.target.textContent);

    return (
        <>
            <h5 className="w-100 m-2 mb-3">Categories:</h5>
            <div className="overflow-auto non-scroll" style={{
                maxHeight: "70vh", msFlexDirection: "row",
                msFlexWrap: "wrap", display: "flex", flexDirection: "row", flexWrap: "wrap"
            }}>
                {categories.map((category, index) => (
                    <div className="pl-1" key={index}>
                        <Badge color="secondary" pill className="text-lowercase" style={{cursor: 'pointer'}} onClick={onClickHandle}>
                            {category}
                        </Badge>
                    </div>
                ))}
            </div>
        </>
    )
};

export default Categories;