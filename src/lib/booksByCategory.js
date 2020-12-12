import API from './Api';

const getBooksByCategory = (categoryName) => {
    const url = `/volumes?q=subject:${categoryName}&maxResults=21`;
    return API.get(url);
};

export default getBooksByCategory;