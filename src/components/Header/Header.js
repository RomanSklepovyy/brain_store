import React, {useEffect, useRef} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Badge, Input, Navbar, NavbarBrand} from 'reactstrap';
import {Link} from "react-router-dom";
import {Cart, BookmarkHeart} from 'react-bootstrap-icons';


const Header = ({searchField, fieldToSearchIn, getProducts, updateSearchField, updateFieldToSearchIn, clearBooks}) => {

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            setTimeout(() => {
                clearBooks();
                getProducts();
            }, 1000);
        }
    });

    const onSearchFieldChange = e => updateSearchField(e.target.value);

    const onTypeSearchChange = e => {updateFieldToSearchIn(e.target.value)};

    const onSearchEnter=(event)=> {
        if (event.keyCode === 13) {
            getProducts();
        }
    };

    return (
    <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Brain <Badge color="secondary">Shop</Badge> </NavbarBrand>
                <Input placeholder="Search" value={searchField} onKeyDown={onSearchEnter} onChange={onSearchFieldChange}/>

                <Input type="select" value = {fieldToSearchIn} onChange={onTypeSearchChange} className='w-25 ml-2'>
                    <option value="intitle">Title</option>
                    <option value="inauthor">Author</option>
                    <option value="inpublisher">Publisher</option>
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