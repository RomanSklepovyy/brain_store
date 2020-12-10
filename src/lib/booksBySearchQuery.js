import API from './Api';

const getBooksBySearchQuery = (text) => {
    const url = `/volumes?q="${text}"`;
    return API.get(url);
};

export default getBooksBySearchQuery;