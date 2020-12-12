import {Container, Row, Col} from "reactstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import BookList from "./BooksList/BookList";
import FilterPanelContainer from "./FilterPanel/filterPanelContainer";

const MainPage = (props) => (
    <Container>
        <Row>
            <Col className='mt-2 p-0 pr-2' xs="3" style={{height: "90vh", maxHeight: "90vh"}}>
                <FilterPanelContainer/>
            </Col>
            <Col className='mt-2 p-0' xs="9" style={{height: "90vh", maxHeight: "90vh"}}>
                <BookList books={props.books}/>
            </Col>
        </Row>
    </Container>
);

export default MainPage;