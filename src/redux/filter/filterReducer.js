import * as types from "../filter/filterActionsTypes";

const initialState = {
    categories: ['ANTIQUES & COLLECTIBLES', 'ARCHITECTURE', 'ART',
    'BIOGRAPHY', 'AUTOBIOGRAPHY', 'BODY', ' MIND & SPIRIT', 'COMICS',
     'GRAPHIC NOVELS', 'COMPUTERS', 'COOKING', 'CRAFTS & HOBBIES',
    'DESIGN', 'DRAMA', 'EDUCATION', 'FAMILY & RELATIONSHIPS', 'FICTION', 'FOREIGN LANGUAGE STUDY',
    'GAMES & ACTIVITIES', 'GARDENING', 'HEALTH & FITNESS', 'HISTORY', 'HOUSE & HOME',
    'HUMOR', 'JUVENILE FICTION', 'JUVENILE NONFICTION', 'LANGUAGE ARTS', 'DISCIPLINES',
    'LAW', 'LITERARY COLLECTIONS', 'LITERARY CRITICISM', 'MATHEMATICS', 'MEDICAL', 'MUSIC',
    'NATURE', 'PERFORMING ARTS', 'PETS', 'PHILOSOPHY', 'PHOTOGRAPHY', 'POETRY', 'POLITICAL SCIENCE',
    'PSYCHOLOGY', 'REFERENCE', 'RELIGION', 'SCIENCE', 'SELF-HELP', 'SOCIAL SCIENCE', 'SPORTS & RECREATION',
    'STUDY AIDS', 'TECHNOLOGY', 'ENGINEERING', 'TRANSPORTATION', 'TRAVEL', 'TRUE CRIME', 'YOUNG ADULT FICTION',
    'YOUNG ADULT NONFICTION'],
    sortType: 'relevance',
    printType: 'all',
    ebookType: 'ebooks',
    orderBy: 'relevance'
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_ORDER_BY: {
            return {
                ...state,
                searchField: action.payload
            }
        }
        case types.UPDATE_PRINT_TYPE: {
            return {
                ...state,
                printType: action.payload
            }

        }
        case types.UPDATE_EBOOK_TYPE: {
            return {
                ...state,
                printType: action.payload
            }
        }
        default:
            return state;
    }
};

export default filterReducer;