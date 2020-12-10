import React from 'react';
import {connect} from "react-redux";
import {getProductsByCategoryAction} from "../../redux/products/productsActions";
import MainPage from "./MainPage";

let mapStateToProps = (state) => {
    return {
        products: state.products.products
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        getProductsByCategory: (category) => {
            dispatch(getProductsByCategoryAction(category));
        }
    }
};

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPageContainer;