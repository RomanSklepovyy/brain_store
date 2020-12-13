import API from './Api';

export const getBooksByCategory = (options) => {

    return API.get('/volumes', {
        params: {
            q: `${options.fieldToSearchIn}:${options.searchQuery}`,
            startIndex: options.startIndex,
            maxResults: '21',
            printType: options.printType,
            orderBy: options.orderBy,
            filter: options.ebook,
        }
    })
};
