import React from 'react';
import {connect} from "react-redux";
import {updateCategoryAction, updateEbookTypeAction, updateOrderByAction, updatePrintTypeAction} from "../../../redux/filter/filterActions";
import FilterPanel from "./FilterPanel";
import {clearBooksAction, getProductsByOptionsAction} from "../../../redux/products/productsActions";

let mapStateToProps = (state) => {
    let {category, orderBy, printType, ebookType, categories} = state.filter;
    return {
        categories,
        orderBy,
        printType,
        ebookType,
        category
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateOrderBy: (sortType) => dispatch(updateOrderByAction(sortType)),
        updatePrintType: (printType) => dispatch(updatePrintTypeAction(printType)),
        updateEbookType: (ebookType) => dispatch(updateEbookTypeAction(ebookType)),
        updateCategory: (category) => dispatch(updateCategoryAction(category)),
        getProducts: () => dispatch(getProductsByOptionsAction()),
        clearBooks: () => dispatch(clearBooksAction())

    }
};

const FilterPanelContainer = connect(mapStateToProps, mapDispatchToProps)(FilterPanel);

export default FilterPanelContainer;