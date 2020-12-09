import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Container,
    Row,
    Spinner
} from "reactstrap";

const BookList = () => {
    return (
        <div className="mr-2 bg-light w-100 h-100">
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardImg top width="100%" src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Card image cap" />
                            {/*<Spinner className="top " color="primary" />*/}
                            <CardBody>
                                <CardTitle tag="h5">Flowers for Algernon</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Daniel Keyes</CardSubtitle>
                                <CardText>Oscar-winning film Charly starring Cliff Robertson and Claire Bloom-a mentally challenged man receives an operation that turns him into a genius...and introduces him to heartache.</CardText>
                                <Button>Add</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <CardImg top width="100%" src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Card image cap" />
                            {/*<Spinner className="top " color="primary" />*/}
                            <CardBody>
                                <CardTitle tag="h5">Flowers for Algernon</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Daniel Keyes</CardSubtitle>
                                <CardText>Oscar-winning film Charly starring Cliff Robertson and Claire Bloom-a mentally challenged man receives an operation that turns him into a genius...and introduces him to heartache.</CardText>
                                <Button>Add</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <CardImg top width="100%" src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Card image cap" />
                            {/*<Spinner className="top " color="primary" />*/}
                            <CardBody>
                                <CardTitle tag="h5">Flowers for Algernon</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Daniel Keyes</CardSubtitle>
                                <CardText>Oscar-winning film Charly starring Cliff Robertson and Claire Bloom-a mentally challenged man receives an operation that turns him into a genius...and introduces him to heartache.</CardText>
                                <Button>Add</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default BookList;