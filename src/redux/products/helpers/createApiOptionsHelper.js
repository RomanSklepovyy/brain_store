const createApiOptionsHelper = ({products, filter , header}) => {

    let options = {
        fieldToSearchIn: header.fieldToSearchIn,
        searchQuery: header.searchField ? header.searchField.replace(' ', '+') : '""',
        startIndex: products.productsData.books.length,
        printType: filter.printType,
        orderBy: filter.orderBy,
        ebook: filter.ebookType
    };

    if (filter.category) {
        options.fieldToSearchIn = '';
        options.searchQuery = options.searchQuery + `+subject:${filter.category.toLowerCase().replace(' ', '+')}`
    }

    if (filter.printType === 'magazines') {
        options.fieldToSearchIn = '';
        options.ebook = '';
    }

    return options;
};

export default createApiOptionsHelper;