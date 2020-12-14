import {connect} from "react-redux";
import Wanted from "./Wanted";
import {deleteBookFromWantedAction} from "../../redux/wanted/wantedActions";

const mapStateToProps = state => {
    return {
        books: state.wanted.books
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteBook: (id) => dispatch(deleteBookFromWantedAction(id))
    }
};

const  WantedContainer = connect(mapStateToProps, mapDispatchToProps)(Wanted);

export default WantedContainer;