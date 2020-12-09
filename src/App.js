import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import {Col, Container, Row} from "reactstrap";
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Cart from "./components/Cart/Cart";
import Wanted from "./components/Wanted/Wanted";


function App() {
  return (
      <Container>
          <Row>
              <Col sm="12" md={{ size: 10, offset: 1 }}>

                  <Header />

                  <Route exact path='/' render={() => <MainPage />}/>
                  <Route path='/cart' render={() => <Cart />}/>
                  <Route path='/wanted' render={() => <Wanted />}/>

              </Col>
          </Row>

      </Container>
  );
}

export default App;
