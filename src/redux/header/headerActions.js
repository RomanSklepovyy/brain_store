import * as types from "./headerActionTypes";

export const getUpdateSearchFieldAction = (payload) => {
    return {type : types.UPDATE_SEARCH_FIELD, payload};
};
