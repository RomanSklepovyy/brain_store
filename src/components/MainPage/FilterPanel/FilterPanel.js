import React from "react";
import Categories from "./Categories/Categories";
import Options from "./Options/Options";

const FilterPanel = (props) => {

    return (
        <div className="bg-light w-100 h-100 rounded p-0 ">
            <Options filterData={props}/>
            <Categories categories = {props.categories} category={props.category} updateCategory={props.updateCategory} getProducts={props.getProducts}/>
        </div>
    )
};

export default FilterPanel;