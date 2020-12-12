import API from './Api';

const getBooksBySearchQuery = (text) => {
    const url = `/volumes?q="${text}"&maxResults=21`;
    return API.get(url);
};

export default getBooksBySearchQuery;