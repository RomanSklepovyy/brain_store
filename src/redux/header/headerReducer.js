import * as types from './headerActionTypes';

const initialState = {
    searchField : '',
    fieldToSearchIn: 'intitle'
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_SEARCH_FIELD: {
            return {
                ...state,
                searchField: action.payload
            }
        }
        case types.UPDATE_FIELD_TO_SEARCH_IN: {
            return {
                ...state,
                fieldToSearchIn: action.payload
            }
        }
        default:
            return state;
    }
};

export default headerReducer;