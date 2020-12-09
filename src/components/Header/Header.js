import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Badge, Input, Navbar, NavbarBrand} from 'reactstrap';
import {Link} from "react-router-dom";


const Header = () => (
    <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Brain <Badge color="secondary">Shop</Badge> </NavbarBrand>
            <Input placeholder="Search"/>
            <Link to="/wanted">
                <button type="button" className="btn btn-dark mr-2 ml-2">Wanted</button>
            </Link>
            <Link to="/cart">
                <button type="button" className="btn btn-dark mr-2">Cart</button>
            </Link>
        </Navbar>
    </div>
);

export default Header;