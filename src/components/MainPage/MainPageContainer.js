import React from 'react';
import {connect} from "react-redux";
import {getProductsByOptionsAction} from "../../redux/products/productsActions";
import MainPage from "./MainPage";

const mapStateToProps = (state) => {
    return {
        books: state.products.productsData.books,
        availableBooks: state.products.productsData.availableBooks,
        processing: state.products.processing
    };
};

const mapDispatchToProps = (dispatch, state) => {
    return {
        getProducts: () => {
            dispatch(getProductsByOptionsAction())
        },
}
};

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPageContainer;