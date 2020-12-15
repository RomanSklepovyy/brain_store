import './App.css';
import React from "react";
import {Col, Container, Row} from "reactstrap";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import CartContainer from "./components/Cart/CartContainer";
import WantedContainer from "./components/Wanted/WantedContainer";
import ProductInfoContainer from "./components/productInfo/ProductInfoContainer";
import {Route} from "react-router-dom";


function App() {
  return (
      <Container>
          <Row>
              <Col>
                  <HeaderContainer />
                  <Route exact path='/' render={() => <MainPageContainer />}/>
                  <Route path='/cart' render={() => <CartContainer />}/>
                  <Route path='/wanted' render={() => <WantedContainer />}/>
                  <Route path='/bookInfo/:bookID?' render={() => <ProductInfoContainer />}/>
              </Col>
          </Row>
      </Container>
  );
}

export default App;
