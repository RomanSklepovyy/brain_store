import * as types from './productsActionTypes';

const initialState = {
    productsData: {
        books: [],
        availableBooks: 0
    },
    processing: false
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS_BY_CATEGORY_SUCCESS: {
            console.log(action);
            return {
                ...state,
                productsData: createBooksObjectData(action.result.data)
                }
            }
        case types.GET_PRODUCTS_BY_SEARCH_QUERY_SUCCESS: {
            console.log(action);
            return {
                ...state,
                productsData: createBooksObjectData(action.result.data)
            }
        }
        default:
            return state;
    }
};

const createBooksObjectData = (data) => {

    try {
        let newDataObject = {
            //books remain in server
            availableBooks: data.totalItems - data.items.length,
            books: data.items.map(item => {

                let {title, subtitle, authors, publisher, publishedDate, description, categories,
                    averageRating, ratingsCount, language} = item.volumeInfo;

                let {country, saleability} = item.saleInfo;

                let saleDetails;

                if (saleability === "FOR_SALE") {
                    saleDetails = {
                        price : item.saleInfo.listPrice.amount,
                        currencyCode : item.saleInfo.listPrice.currencyCode,
                        buyLink : item.saleInfo.buyLink
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

        return newDataObject;

    } catch (e) {
        console.log('Error with creating books object data! \n', e);
        return null;
    }
}


export default productReducer;