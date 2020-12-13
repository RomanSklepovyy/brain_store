import React from 'react';
import {getUpdateSearchFieldAction} from "../../redux/header/headerActions";
import {connect} from "react-redux";
import Header from "./Header";
import {getProductsByOptionsAction} from "../../redux/products/productsActions";

let mapStateToProps = state => {
    return {
        searchField: state.header.searchField
    }
};

let mapDispatchToProps = dispatch => {
    return {
        updateSearchField: text => dispatch(getUpdateSearchFieldAction(text)),
        getProducts: () => dispatch(getProductsByOptionsAction())
    }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;