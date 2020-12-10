import {combineReducers} from "redux";
import productReducer from "./products/productReducer";
import headerReducer from "./header/headerReducer";

const rootReducer = combineReducers({
    product: productReducer,
    header: headerReducer
});

export default rootReducer;