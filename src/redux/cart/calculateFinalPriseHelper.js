const calculateFinalPriseHelper = books => {
    if (books) {
        return books.reduce((sum, book) => book.price ? (sum + book.price * book.amount): 0, 0);
    } else {
        return 0;
    }
};

export default calculateFinalPriseHelper;