import React from 'react';
import {connect} from "react-redux";
import {getProductsByCategoryAction} from "../../redux/products/productsActions";
import MainPage from "./MainPage";

let mapStateToProps = (state) => {
    return {
        books: state.products.productsData.books
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