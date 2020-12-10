import React from 'react';
import {connect} from "react-redux";
import {getProductsCategoryAction} from "../../redux/products/productsActions";
import MainPage from "./MainPage";

let mapStateToProps = (state) => {
    return null;
}
let mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (category) => {
            dispatch(getProductsCategoryAction(category));
        }
    }
}

const MainPageContainer = connect(null, mapDispatchToProps)(MainPage);

export default MainPageContainer;