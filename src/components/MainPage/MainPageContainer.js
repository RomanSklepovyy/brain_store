import React from 'react';
import {connect} from "react-redux";
import {getProductsByOptionsAction} from "../../redux/products/productsActions";
import MainPage from "./MainPage";
import {addBookToWantedAction} from "../../redux/wanted/wantedActions";
import {addBookToCartAction} from "../../redux/cart/cartActions";

const mapStateToProps = (state) => {
    return {
        books: state.products.productsData.books,
        availableBooks: state.products.productsData.availableBooks,
        processing: state.products.processing
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProductsByOptionsAction()),
        addToWanted: (id) => dispatch(addBookToWantedAction(id)),
        addToCart: (id) => dispatch(addBookToCartAction(id))
    }
};

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPageContainer;