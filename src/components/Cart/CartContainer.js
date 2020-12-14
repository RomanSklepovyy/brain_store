import {calculateFinalPriceAction, changeBookAmountAction, deleteBookFromCartAction} from "../../redux/cart/cartActions";
import {connect} from "react-redux";
import Cart from "./Cart";
import {addBookToWantedAction} from "../../redux/wanted/wantedActions";

const mapStateToProps = state => {
    return {
        books: state.cart.books,
        finalPrice: state.cart.finalPrice
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteBook: (id) => dispatch(deleteBookFromCartAction(id)),
        changeAmount: (id, amount) => dispatch(changeBookAmountAction(id, amount)),
        addToWanted: (id) => dispatch(addBookToWantedAction(id)),
        calculatePrice: () => dispatch(calculateFinalPriceAction())
    }
};

const  CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;