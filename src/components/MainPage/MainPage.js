import {Container, Row} from "reactstrap";
import React from "react";
import Col from "reactstrap/es/Col";
import FilterPanel from "./FilterPanel/FilterPanel";
import 'bootstrap/dist/css/bootstrap.css';
import BookList from "./BooksList/BookList";

const MainPage = (props) => (
    <div>
        <Container>
            <Row>
                <Col className='mt-2 p-0 pr-2' xs="3" style={{height: "90vh"}}>
                    <FilterPanel getProducts = {props.getProducts}/>
                </Col>
                <Col className='mt-2 p-0 pl-2' xs="9" style={{height: "90vh"}}>
                    <BookList/>
                </Col>
            </Row>
        </Container>
    </div>
);

export default MainPage;