import * as types from './headerActionTypes';

const initialState = {
    searchField : '',
    fieldToSearchIn: 'title'
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_SEARCH_FIELD: {
            return {
                ...state,
                searchField: action.payload
            }
        }
        default:
            return state;
    }
};

export default headerReducer;