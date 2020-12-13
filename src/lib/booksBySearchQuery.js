import API from './Api';

const getBooksBySearchQuery = (text, startIndex) => {
    const url = `/volumes?q="${text}"&maxResults=21&startIndex=${startIndex}`;
    return API.get(url);
};

export default getBooksBySearchQuery;