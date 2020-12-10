import './App.css';
import React from "react";
import {Col, Container, Row} from "reactstrap";
import {Route} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Wanted from "./components/Wanted/Wanted";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {
  return (
      <Container>
          <Row>
              <Col sm="12" md={{ size: 10, offset: 1 }}>

                  <HeaderContainer />

                  <Route exact path='/' render={() => <MainPageContainer />}/>
                  <Route path='/cart' render={() => <Cart />}/>
                  <Route path='/wanted' render={() => <Wanted />}/>

              </Col>
          </Row>

      </Container>
  );
}

export default App;
