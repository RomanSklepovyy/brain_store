import API from './Api';

const getBooksByCategory = (categoryName, startIndex) => {
    const url = `/volumes?q=subject:${categoryName}&maxResults=21&startIndex=${startIndex}`;
    return API.get(url);
};

export default getBooksByCategory;
