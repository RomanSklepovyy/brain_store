import React from 'react';
import {getUpdateSearchFieldAction, updateFieldToSearchInAction} from "../../redux/header/headerActions";
import {connect} from "react-redux";
import Header from "./Header";
import {clearBooksAction, getProductsByOptionsAction} from "../../redux/products/productsActions";

let mapStateToProps = state => {
    return {
        searchField: state.header.searchField,
        fieldToSearchIn: state.header.fieldToSearchIn
    }
};

let mapDispatchToProps = dispatch => {
    return {
        updateSearchField: text => dispatch(getUpdateSearchFieldAction(text)),
        getProducts: () => dispatch(getProductsByOptionsAction()),
        updateFieldToSearchIn: value => dispatch(updateFieldToSearchInAction(value)),
        clearBooks: () => dispatch(clearBooksAction())
    }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;