import {combineReducers} from "redux";
import productReducer from "./products/productReducer";
import headerReducer from "./header/headerReducer";
import filterReducer from "./filter/filterReducer";

const rootReducer = combineReducers({
    products: productReducer,
    header: headerReducer,
    filter: filterReducer
});

export default rootReducer;