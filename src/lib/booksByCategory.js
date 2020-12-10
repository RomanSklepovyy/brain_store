import API from './Api';

const getBooksByCategory = (categoryName) => {
    const url = `/volumes?q=subject:${categoryName}`;
    return API.get(url);
};

export default getBooksByCategory;