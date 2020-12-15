import {connect} from "react-redux";
import Wanted from "./Wanted";
import {
    addBookToWantedAction,
    deleteBookFromWantedAction,
    updateSearchWantedBooksOptions,
    updateWantedSearchField
} from "../../redux/wanted/wantedActions";
import {addBookToCartAction} from "../../redux/cart/cartActions";

const mapStateToProps = state => {
    return {
        books: state.wanted.books,
        searchQuery: state.wanted.searchQuery,
        searchOptions: state.wanted.searchOptions
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteBook: (id) => dispatch(deleteBookFromWantedAction(id)),
        addToCart: (id) => dispatch(addBookToCartAction(id)),
        addToWanted: (id) => dispatch(addBookToWantedAction(id)),
        updateSearchQuery: (query) => dispatch(updateWantedSearchField(query)),
        updateSearchOptions: () => dispatch(updateSearchWantedBooksOptions())
    }
};

const  WantedContainer = connect(mapStateToProps, mapDispatchToProps)(Wanted);

export default WantedContainer;