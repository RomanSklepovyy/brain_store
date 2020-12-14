import {combineReducers} from "redux";
import productReducer from "./products/productReducer";
import headerReducer from "./header/headerReducer";
import filterReducer from "./filter/filterReducer";
import cartReducer from "./cart/cartReducer";
import wantedReducer from "./wanted/wantedReducer";

const rootReducer = combineReducers({
    products: productReducer,
    header: headerReducer,
    filter: filterReducer,
    cart: cartReducer,
    wanted: wantedReducer
});

export default rootReducer;