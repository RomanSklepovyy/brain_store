import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Badge, Input, Navbar, NavbarBrand} from 'reactstrap';
import {Link} from "react-router-dom";
import {Cart, BookmarkHeart} from 'react-bootstrap-icons';


const Header = (props) => {

    const onSearchFieldChange = e => {
        let text = e.target.value;
        props.updateSearchField(text);
    };

    const onSearchEnter=(event)=> {
        if (event.keyCode === 13) {
            props.getProductsBySearchQuery(event.target.value)
        }
    };


    return (
    <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Brain <Badge color="secondary">Shop</Badge> </NavbarBrand>
                <Input placeholder="Search" value={props.searchField} onKeyDown={onSearchEnter} onChange={onSearchFieldChange}/>

                <Input type="select" className='w-25 ml-2'>
                    <option>Title</option>
                    <option>Author</option>
                    <option>Publisher</option>
                </Input>

            <Link to="/wanted">
                <button type="button" className="btn btn-dark ml-2 mr-2 d-inline-flex"> Wanted <BookmarkHeart size={25} className="ml-2"/></button>
            </Link>
            <Link className="d-inline-flex" to="/cart">
                <button type="button" className="btn btn-dark mr-2 d-inline-flex"> Cart <Cart size={25} className="ml-2"/></button>
            </Link>
        </Navbar>
    </div>
    );
};

export default Header;