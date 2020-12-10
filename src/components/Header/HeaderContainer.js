import React from 'react';
import {getBooksBySearch, getUpdateSearchFieldAction} from "../../redux/header/headerActions";
import {connect} from "react-redux";
import Header from "./Header";
import {getProductsBySearchQueryAction} from "../../redux/products/productsActions";

let mapStateToProps = state => {
    return {
        searchField: state.header.searchField
    }
};

let mapDispatchToProps = dispatch => {
    return {
        updateSearchField: text => dispatch(getUpdateSearchFieldAction(text)),
        getProductsBySearchQuery: (text) => dispatch(getProductsBySearchQueryAction(text))
    }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;