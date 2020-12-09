const UPDATE_NEW_SEARCH_INPUT_BODY = 'UPDATE-NEW-SEARCH-INPUT-BODY';

let initialState = {
    newInputBody: ''
};

const headerReducer = (state = initialState, action) => {
    if(action.type === UPDATE_NEW_SEARCH_INPUT_BODY) {
        return {
            newInputBody: action.body
        }
    }
};

export const updateInputBodyAC = (body) => ({
    type: UPDATE_NEW_SEARCH_INPUT_BODY,
    body: body
});

export default headerReducer;