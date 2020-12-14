import {changeBooksAmountAction, deleteBookFromCartAction} from "../../redux/cart/cartActions";
import {connect} from "react-redux";
import Cart from "./Cart";

const mapStateToProps = state => {
    return {
        books: state.cart.books
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteBook: (id) => dispatch(deleteBookFromCartAction(id)),
        changeAmount: (id, amount) => dispatch(changeBooksAmountAction(id, amount))
    }
};

const  CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;