import * as types from './productsActionTypes';

const initialState = {
    productsData: {
        books: [],
        availableBooks: 0
    },
    processing: false,
    previousRequestOptions: {
        searchQuery: 'Dnipro'
    }
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        // case types.GET_PRODUCTS_BY_CATEGORY_SUCCESS: {
        //     //console.log(action);
        //     return {
        //         ...state,
        //         productsData: createBooksObjectData(action.result.data)
        //         }
        //     }
        // case types.GET_PRODUCTS_BY_SEARCH_QUERY_SUCCESS: {
        //     //console.log(action);
        //     return {
        //         ...state,
        //         productsData: createBooksObjectData(action.result.data)
        //     }
        // }
        // case types.ADD_PRODUCTS_BY_SEARCH_QUERY_SUCCESS: {
        //     return {
        //         ...state,
        //         productsData: [...state.productsData, ...createBooksObjectData(action.result.data)]
        //     }
        // }
        case types.GET_PRODUCTS_BY_OPTIONS_SUCCESS: {
            return {
                ...state,
                productsData: {
                    books: [...state.productsData.books, ...createBooksObjectData(action.result.data).books],
                    availableBooks: action.result.data.totalItems// - state.productsData.books.length
                }
            }
        }
        case types.SET_PROCESSING_FALSE: {
            return {
                ...state,
                processing: false
            }
        }
        case types.SET_PROCESSING_TRUE: {
            return {
                ...state,
                processing: true
            }
        }
        default:
            return state;
    }
};

const createBooksObjectData = (data) => {

    try {
        return {
            //books remain in server
            availableBooks: data.totalItems,

            //books array
            books: data.items.map(item => {

                let {
                    title, subtitle, authors, publisher, publishedDate, description, categories,
                    averageRating, ratingsCount, language
                } = item.volumeInfo;

                let {country, saleability} = item.saleInfo;

                let saleDetails;

                if ((saleability !== "NOT_FOR_SALE") && (saleability !== "FREE")) {
                    saleDetails = {
                        price: item.saleInfo.listPrice.amount,
                        currencyCode: item.saleInfo.listPrice.currencyCode,
                        buyLink: item.saleInfo.buyLink
                    }
                }

                return {
                    id: item.id,
                    title,
                    subtitle,
                    authors,
                    publisher,
                    publishedDate,
                    description,
                    categories,
                    averageRating,
                    ratingsCount,
                    language,
                    country,
                    saleability,
                    smallImage: (item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : null),
                    normalImage: (item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : null),
                    link: (item.volumeInfo.canonicalVolumeLink ? item.volumeInfo.canonicalVolumeLink : null),
                    ...saleDetails
                }
            })
        };

    } catch (e) {
        console.log('Error with creating books object data! \n', e);
        return null;
    }
};


export default productReducer;