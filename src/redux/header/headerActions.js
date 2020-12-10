import * as types from "./headerActionTypes";

export const getUpdateSearchFieldAction = (payload) => {
    return {type : types.UPDATE_SEARCH_FIELD, payload};
};

export const getBooksBySearch = (payload) => {
    return {type : types.GET_PRODUCTS_BY_SEARCH_QUERY_REQUEST, payload};
};