import React, {useEffect} from "react";
import {Badge} from "reactstrap";

const Categories = ({categories, category, updateCategory, getProducts, clearBooks}) => {
    const onClickHandle = (e) => category === e.target.textContent ? updateCategory('') : updateCategory(e.target.textContent);

    useEffect(() => {
        clearBooks();
        getProducts();
    }, [category]);

    return (
        <div className="m-4">
            <h5 className="w-100 m-2 mb-3">Categories:</h5>
            <div className="overflow-auto non-scroll" style={{
                maxHeight: "65vh", msFlexDirection: "row",
                msFlexWrap: "wrap", display: "flex", flexDirection: "row", flexWrap: "wrap"
            }}>
                {categories.map((categoryElement, index) => (
                    <div className="pl-1" key={index}>
                        <Badge color={category === categoryElement ? "success" : "secondary"} pill className="text-lowercase" style={{cursor: 'pointer'}} onClick={onClickHandle}>
                            {categoryElement}
                        </Badge>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Categories;
