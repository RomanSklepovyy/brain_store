import React, {useEffect, useRef} from "react";
import Categories from "./Categories/Categories";
import Options from "./Options/Options";

const FilterPanel = (props) => {

    const isInitialMount = useRef(true);

    return (
        <div className="bg-light w-100 h-100 rounded p-0 ">
            <Options filterData={props}/>
            <Categories categories = {props.categories} category={props.category} updateCategory={props.updateCategory}
                        getProducts={props.getProducts} clearBooks={props.clearBooks}/>
        </div>
    )
};

export default FilterPanel;