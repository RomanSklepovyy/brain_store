import * as types from "./headerActionTypes";

export const getUpdateSearchFieldAction = (payload) => {
    return {type : types.UPDATE_SEARCH_FIELD, payload};
};

export const updateFieldToSearchInAction = (payload) => {
    return {type : types.UPDATE_FIELD_TO_SEARCH_IN, payload};
};

