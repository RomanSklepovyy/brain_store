import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Badge, Input, Navbar, NavbarBrand} from 'reactstrap';
import {Link} from "react-router-dom";


const Header = (props) => {

    const onSearchFieldChange = e => {
        let text = e.target.value;
        props.updateSearchField(text);
    };

    const onKeyPressHandler = e => {
        if (e.keyCode === 13) {
            props.getProductsBySearchQuery(e.target.value);
        }
    };


    return (
    <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Brain <Badge color="secondary">Shop</Badge> </NavbarBrand>

                <Input placeholder="Search" value={props.searchField} onChange={onSearchFieldChange} onKeyPress={onKeyPressHandler}/>

                <Input type="select" className='w-25 ml-2'>
                    <option>Title</option>
                    <option>Author</option>
                    <option>Publisher</option>
                </Input>

            {/*<InputGroup>*/}
            {/*    <Input placeholder="Search" value={props.searchField} onChange={onSearchFieldChange}/>*/}
            {/*    <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>*/}
            {/*        <DropdownToggle caret>*/}
            {/*            Title*/}
            {/*        </DropdownToggle>*/}
            {/*        <DropdownMenu>*/}
            {/*            <DropdownItem>Author</DropdownItem>*/}
            {/*            <DropdownItem divider>Author</DropdownItem>*/}
            {/*            <DropdownItem>Publisher</DropdownItem>*/}
            {/*        </DropdownMenu>*/}
            {/*    </InputGroupButtonDropdown>*/}
            {/*</InputGroup>*/}

            <Link to="/wanted">
                <button type="button" className="btn btn-dark mr-2 ml-2">Wanted</button>
            </Link>
            <Link to="/cart">
                <button type="button" className="btn btn-dark mr-2">Cart</button>
            </Link>
        </Navbar>
    </div>
    );
};

export default Header;