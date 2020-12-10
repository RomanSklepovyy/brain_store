import API from './Api';

const getBooksByCategory = (categoryName) => {
    const url = `/volumes?q=subject:${categoryName}`;

    const result = API.get(url);

    return result;
}

export default getBooksByCategory;