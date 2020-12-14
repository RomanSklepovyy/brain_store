import './App.css';
import React from "react";
import {Col, Container, Row} from "reactstrap";
import {Route} from "react-router-dom";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import CartContainer from "./components/Cart/CartContainer";
import WantedContainer from "./components/Wanted/WantedContainer";


function App() {
  return (
      <Container>
          <Row>
              <Col>
                  <HeaderContainer />
                  <Route exact path='/' render={() => <MainPageContainer />}/>
                  <Route path='/cart' render={() => <CartContainer />}/>
                  <Route path='/wanted' render={() => <WantedContainer />}/>
              </Col>
          </Row>
      </Container>
  );
}

export default App;
