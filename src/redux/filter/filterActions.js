import * as types from "./filterActionsTypes";

export const updateOrderByAction = (payload) => {
    return {type : types.UPDATE_ORDER_BY, payload};
};

export const updatePrintTypeAction = (payload) => {
    return {type : types.UPDATE_PRINT_TYPE, payload};
};

export const updateEbookTypeAction = (payload) => {
    return {type : types.UPDATE_EBOOK_TYPE, payload};
};

export const updateCategoryAction = (payload) => {
    return {type : types.UPDATE_CATEGORY, payload};
};