import React from "react";
import Categories from "./Categories/Categories";
import Options from "./Options/Options";

const FilterPanel = (props) => {

    return (
        <div className="mr-2 bg-light w-100 h-100 rounded ">
            <Options filterData={props}/>
            <Categories categories = {props.categories} category={props.category} updateCategory={props.updateCategory} getProducts={props.getProducts}/>
        </div>
    )
};

export default FilterPanel;