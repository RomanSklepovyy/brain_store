import {connect} from "react-redux";
import {addBookToWantedAction} from "../../redux/wanted/wantedActions";
import {addBookToCartAction} from "../../redux/cart/cartActions";
import ProductInfo from "./ProductInfo";
import React, {useEffect} from "react";
import {withRouter} from 'react-router-dom';
import {getOpenedProductAction} from "../../redux/products/productsActions";
import {compose} from "redux";

const ProductInfoContainer = (props) => {

    useEffect(() => {
        console.log(props.match.params.bookID);
        props.getOpenedProduct(props.match.params.bookID);
    });

    return (
        <ProductInfo {...props} book={props.book}/>
    )
};

const mapStateToProps = state => {
    return {
        book: state.products.openedBook,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addBookToCartAction(id)),
        addToWanted: (id) => dispatch(addBookToWantedAction(id)),
        getOpenedProduct: (id) => dispatch(getOpenedProductAction(id))
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProductInfoContainer);