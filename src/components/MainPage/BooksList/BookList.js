import React from "react";
import {Button, Card, CardBody, CardColumns, CardImg, CardSubtitle, CardTitle,} from "reactstrap";
import BookCard from "./BookCard/BookCard";

const BookList = (props) => {
    return (
        <div className="mr-2 bg-light w-100 h-100 overflow-auto">

            <CardColumns>

                <BookCard books={props.books}>

                </BookCard>

                <Card>
                    <CardImg top width="100%" src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Card image cap" />
                    {/*<Spinner className="top " color="primary" />*/}
                    <CardBody>
                        <CardTitle tag="h5">Flowers for Algernon</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Daniel Keyes</CardSubtitle>
                        <Button>Add</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Card image cap" />
                    {/*<Spinner className="top " color="primary" />*/}
                    <CardBody>
                        <CardTitle tag="h5">Flowers for Algernon</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Daniel Keyes</CardSubtitle>
                        <Button>Add</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Card image cap" />
                    {/*<Spinner className="top " color="primary" />*/}
                    <CardBody>
                        <CardTitle tag="h5">Flowers for Algernon</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Daniel Keyes</CardSubtitle>
                        <Button>Add</Button>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="100%" src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Card image cap" />
                    {/*<Spinner className="top " color="primary" />*/}
                    <CardBody>
                        <CardTitle tag="h5">Flowers for Algernon</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Daniel Keyes</CardSubtitle>
                        <Button>Add</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Card image cap" />
                    {/*<Spinner className="top " color="primary" />*/}
                    <CardBody>
                        <CardTitle tag="h5">Flowers for Algernon</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Daniel Keyes</CardSubtitle>
                        <Button>Add</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Card image cap" />
                    {/*<Spinner className="top " color="primary" />*/}
                    <CardBody>
                        <CardTitle tag="h5">Flowers for Algernon</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Daniel Keyes</CardSubtitle>
                        <Button>Add</Button>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="100%" src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Card image cap" />
                    {/*<Spinner className="top " color="primary" />*/}
                    <CardBody>
                        <CardTitle tag="h5">Flowers for Algernon</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Daniel Keyes</CardSubtitle>
                        <Button>Add</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Card image cap" />
                    {/*<Spinner className="top " color="primary" />*/}
                    <CardBody>
                        <CardTitle tag="h5">Flowers for Algernon</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Daniel Keyes</CardSubtitle>
                        <Button>Add</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Card image cap" />
                    {/*<Spinner className="top " color="primary" />*/}
                    <CardBody>
                        <CardTitle tag="h5">Flowers for Algernon</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Daniel Keyes</CardSubtitle>
                        <Button>Add</Button>
                    </CardBody>
                </Card>
            </CardColumns>
        </div>


    )
};

export default BookList;