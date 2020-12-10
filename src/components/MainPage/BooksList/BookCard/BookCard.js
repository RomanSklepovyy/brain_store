import React from "react";
import {Button, Card, CardBody, CardImg, CardSubtitle, CardTitle} from "reactstrap";

const bookCard = ({books}) => {
    return (
        <div>
            {/*{books.map(({title, author, imageSource}) => (*/}
            {/*    <Card>*/}
            {/*        <CardImg top width="100%" src={imageSource} alt="Card image cap" />*/}
            {/*        /!*<Spinner top width="100%" color="primary" />*!/*/}
            {/*        <CardBody>*/}
            {/*            <CardTitle tag="h5">{title}</CardTitle>*/}
            {/*            <CardSubtitle tag="h6" className="mb-2 text-muted">{author}</CardSubtitle>*/}
            {/*            <Button>Add</Button>*/}
            {/*        </CardBody>*/}
            {/*    </Card>*/}
            {/*))}*/}
        </div>
    )
};

export default bookCard;