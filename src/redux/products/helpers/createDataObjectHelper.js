const createDataObjectHelper = (data) => {
    try {
        return {
            //books remain in server
            availableBooks: data.totalItems,

            //books array
            books: data.items.map(item => {

                let {
                    title, subtitle, authors, publisher, publishedDate, description, categories,
                    averageRating, ratingsCount, language
                } = item.volumeInfo;

                let {country, saleability} = item.saleInfo;

                let saleDetails;

                if ((saleability !== "NOT_FOR_SALE") && (saleability !== "FREE")) {
                    saleDetails = {
                        price: item.saleInfo.listPrice.amount,
                        currencyCode: item.saleInfo.listPrice.currencyCode,
                        buyLink: item.saleInfo.buyLink
                    }
                }

                return {
                    id: item.id,
                    title,
                    subtitle,
                    authors,
                    publisher,
                    publishedDate,
                    description,
                    categories,
                    averageRating,
                    ratingsCount,
                    language,
                    country,
                    saleability,
                    smallImage: (item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : null),
                    normalImage: (item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : null),
                    link: (item.volumeInfo.canonicalVolumeLink ? item.volumeInfo.canonicalVolumeLink : null),
                    ...saleDetails
                }
            })
        };

    } catch (e) {
        console.log('Error with creating books object data! \n', e);
        return null;
    }
};

export default createDataObjectHelper;