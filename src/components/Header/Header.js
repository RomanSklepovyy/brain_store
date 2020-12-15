import React, {useEffect, useRef} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Badge, Input, Navbar, NavbarBrand, NavbarText} from 'reactstrap';
import {Link} from "react-router-dom";
import {Cart, BookmarkHeart} from 'react-bootstrap-icons';


const Header = ({searchField, fieldToSearchIn, getProducts, updateSearchField,
                    updateFieldToSearchIn, clearBooks, processing}) => {

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            if (!processing) {
                clearBooks();
                getProducts();
            }
        }
    }, [searchField, fieldToSearchIn]);

    const onSearchFieldChange = e => updateSearchField(e.target.value);

    const onTypeSearchChange = e => {updateFieldToSearchIn(e.target.value)};

    const onSearchEnter=(event)=> {
        if (event.keyCode === 13) {
            clearBooks();
            getProducts();
        }
    };

    return (
    <div>
        <Navbar color="light" light expand="md" className="mt-2">
            <Link className="text-link" to="/">
                <NavbarText className="h5 d-flex flex-row mt-auto mb-auto mr-3 text-dark">Brain <Badge className="ml-1 h1" color="secondary" >Shop</Badge></NavbarText>
            </Link>
                <Input placeholder="Search" value={searchField} onKeyDown={onSearchEnter} onChange={onSearchFieldChange}/>

                <Input type="select" value = {fieldToSearchIn} onChange={onTypeSearchChange} className='w-25 ml-2'>
                    <option value="intitle">Title</option>
                    <option value="inauthor">Author</option>
                    <option value="inpublisher">Publisher</option>
                </Input>

            <Link className="text-link" to="/wanted">
                <button type="button" className="btn btn-dark ml-2 mr-2 d-inline-flex"> Wanted <BookmarkHeart size={25} className="ml-2"/></button>
            </Link>
            <Link className="text-link" className="d-inline-flex" to="/cart">
                <button type="button" className="btn btn-dark mr-2 d-inline-flex"> Cart <Cart size={25} className="ml-2"/></button>
            </Link>
        </Navbar>
    </div>
    );
};

export default Header;