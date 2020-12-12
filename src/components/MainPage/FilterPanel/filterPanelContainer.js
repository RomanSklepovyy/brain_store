import React from 'react';
import {connect} from "react-redux";
import {updateEbookTypeAction, updateOrderByAction, updatePrintTypeAction} from "../../../redux/filter/filterActions";
import FilterPanel from "./FilterPanel";

let mapStateToProps = (state) => {
    return {
        filterData: state.filter
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateOrderBy: (sortType) => {
            dispatch(updateOrderByAction(sortType));
        },
        updatePrintType: (printType) => {
            dispatch(updatePrintTypeAction(printType));
        },
        updateEbookType: (ebookType) => {
            dispatch(updateEbookTypeAction(ebookType));
        }
    }
};

const FilterPanelContainer = connect(mapStateToProps, mapDispatchToProps)(FilterPanel);

export default FilterPanelContainer;